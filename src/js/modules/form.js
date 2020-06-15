export default class Form{
    constructor(form){
        this.form = document.querySelectorAll(form);
        this.path = 'assets/question.php';
        this.success = 'Спасибо ожидайте ответ';
        this.loading = 'Загрузка...';
        this.failure = 'Ошибка :(';
    }
    async postData(url, data){
          let response = await fetch(url, {
            method: 'POST',
            body: data
          });
          return await response.text();
    }
    clearInputs(){
        document.querySelectorAll('.inp-post').forEach(item => {
            item.value = '';
        });
    }
    init(){
        let writeAns = 0;
        this.form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                const formData = new FormData(item);
                let div = document.createElement('div');
                div.textContent = this.loading;
                this.postData(this.path, formData)
                    .then(res => {
                        console.log(res);
                        div.textContent = this.success;
                    })
                    .catch(res => {
                        console.log(res);
                        div.textContent = this.failure;
                    }) 
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            div.remove();
                        }, 3000);
                    });
                div.style.cssText = `
                    color:black;
                    font-weight:bold;
                    font-size:20px;
                    margin-top:20px;
                `;
                document.querySelectorAll('.inp-post').forEach(inp => {
                    if(inp.value == ''){
                        writeAns = 'undef';
                    } else {
                        item.append(div);
                    }
                });
            }); 
        });
    }
}