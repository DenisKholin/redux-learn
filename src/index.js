import { createStore } from 'redux';

const reducer = (state = 0, action) => {
	switch (action.type) {
		case 'INC':
			return state + 1;
		case 'DEC':
			return state - 1;
		case 'RND':
			return state + action.value;
		default:
			return state;
	}
}

const store = createStore(reducer);

const inc = () => ({ type: 'INC' });
const dec = () => ({ type: 'DEC' });
const rnd = value => ({ type: 'RND', value });

document.getElementById('dec').addEventListener('click', () => {
	store.dispatch(dec())
})
document.getElementById('inc').addEventListener('click', () => {
	store.dispatch(inc())
})
document.getElementById('rnd').addEventListener('click', () => {
	let value = Math.floor(Math.random() * 100)
	store.dispatch(rnd(value))
})

function update() {
	document.getElementById('counter').innerText = store.getState();
}

store.subscribe(update);