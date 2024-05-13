const wordInput = document.getElementById('word')
const buttom = document.getElementById('buttom')
const error = document.getElementById('error')
const savePassword = document.getElementById('password')
const label = document.getElementById('labelError')

buttom.addEventListener('click', () => {
    let correct = false
    const valueWord = wordInput.value
    if (valueWord.trim() !== '') {
        correct = true
    }
    else {
        error.textContent = 'Campo vacio'
        wordInput.classList.add('peer', 'h-full', 'w-full', 'rounded-[7px]', 'border', 'border-red-500', 'border-t-transparent', 'bg-transparent', 'px-3', 'py-2.5', 'font-sans', 'text-sm', 'font-normal', 'text-blue-gray-700', 'outline', 'outline-0', 'transition-all', 'placeholder-shown:border', 'placeholder-shown:border-red-500', 'placeholder-shown:border-t-red-500', 'focus:border-2', 'focus:border-red-500', 'focus:border-t-transparent', 'focus:outline-0', 'disabled:border-0', 'disabled:bg-blue-gray-50')
        label.classList.add(`before:content-[''] after:content-[''] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-green-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-green-500 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-green-500 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-green-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-green-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-green-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-green-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500`);
    }

    if (correct) {
        const newPassword = generatePassword(valueWord)
        savePassword.textContent = newPassword
        wordInput.textContent = ''
    }
})

const generatePassword = (word) => {
    let saveGenerate = ''
    const wordGenrate = 'abcdefghijkmnopqtxz123456789!"#$%&/()={¡'
    for (let i = 0; i < word.length; i++) {
        const generateWord = Math.floor(Math.random() * wordGenrate.length)
        const randomWord = wordGenrate[generateWord]
        saveGenerate += randomWord
    }
    return saveGenerate
}