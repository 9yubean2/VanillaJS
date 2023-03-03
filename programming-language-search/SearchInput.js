// SearchInput.js
export default function SearchInput({
    $target,
    initialState,
    onChange
  }) {
    this.$element = document.createElement('form')
    this.$element.className = "SearchInput"
    this.state = initialState
  
    $target.appendChild(this.$element)
  
    this.render = () => {
      this.$element.innerHTML = `
      <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}" autofocus>
      `
      //화면 들어오자마자 SearchInput에 focus 가게 하기
      //this.$element.focus()
      //대신에 input에 autofocus 속성 부여
    }
  
    

    this.render()
  
    // 이벤트 핸들러 구현부분
    this.$element.addEventListener('keyup', (e) => {
      // 버그 발생1: 커서 초기화 문제 => 순회가 잘 안 되고, 자꾸 0번째로 돌아오는 현상이 생깁니다.
      // 화살표키를 입력했을 때는 onChange 이벤트를 발생시키지 않기
        
      const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight']

      if(!actionIgnoreKeys.includes(e.key)) {
        onChange(e.target.value)
      }
        
    })

    //submit 기본 이벤트 무시
    this.$element.addEventListener('submit',(e)=>{
      e.preventDefault()
    })
  }
  