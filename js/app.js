let inn = prompt('введите ИНН');
let innArr = inn.split('');
const controlNumb = [-1,5,7,9,4,6,10,5,7,0]
let res;
let sumInn;
const validateInn = () =>{
	res=innArr.map((el, i)=>el*controlNumb[i]);
	sumInn = res.reduce((sum, current)=>sum+current)%11;
	
	if(sumInn==inn[9]){
		console.log(`Проверка ИНН ${inn} успешна`)
	} else {
		console.log('Ошибка')
	}
}
validateInn(innArr);

