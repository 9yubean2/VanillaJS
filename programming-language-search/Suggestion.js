export default function Suggestion ({
    $target,
    initialState,
    onSelect
}) {

    this.$element = document.createElement('div')
    this.$element.className = 'Suggestion'
    $target.appendChild(this.$element)

    this.state = {
        selectedIndex: 0,
        items: initialState.items
    }

    this.setState = (nextState) => {
        this.state = {
            ...this.state,
            ...nextState
          }
        this.render()
    }

    //추천 검색어와 입력한 검색어가 일치하는 부분 강조처리 하기
    this.renderMatchedItem = (keyword, item) => {
        if (!item.includes(keyword)) {
          return item
        }
        // 정규표현식을 이용한 방법
        const matchedText = item.match(new RegExp(keyword, 'gi'))[0]
        return item.replace(new RegExp(matchedText, 'gi'), `<span class="Suggestion__item--matched">${matchedText}</span>`)
      }
    
    

    this.render = () => {
        const { selectedIndex, keyword, items } = this.state
        if (items.length > 0) {
          this.$element.style.display = 'block'
          this.$element.innerHTML = `
            <ul>
              ${items.map((item, index) => `
                <li class="${index === selectedIndex ? 'Suggestion__item--selected' : ''}" data-index="${index}">${this.renderMatchedItem(keyword, item)}</li>
                
              `).join('')}
            </ul>
          `
        } else {
          this.$element.style.display = 'none'
          this.$element.innerHTML = ''
        }
      }

    //화살표 방향으로 인덱스 이동
    window.addEventListener('keyup', (e) => {
        if (this.state.items.length > 0) {
            const { selectedIndex } = this.state
            const lastIndex = this.state.items.length -1
            const navigationKeys = ['ArrowUp', 'ArrowDown']
            let nextIndex = selectedIndex
    
            if (navigationKeys.includes(e.key)) {
                if (e.key === 'ArrowUp') {
                    nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1
                }else if(e.key === 'ArrowDown') {
                    nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1
                }
                this.setState({
                    ...this.state,
                    selectedIndex: nextIndex
                })
            }else if(e.key === 'Enter'){
                onSelect(this.state.items[this.state.selectedIndex])
            }
        }
    })

    //클릭 했을 때도 선택되게
    this.$element.addEventListener('click', (e) => {
        const $li = e.target.closest('li')
        if ($li) {
          const { index } = $li.dataset
          try {
            onSelect(this.state.items[parseInt(index)])
          } catch(e) {
            alert('무언가 잘못되었습니다! 선택할 수 없습니다!')
          }
        }
      })
    

    this.render()
}