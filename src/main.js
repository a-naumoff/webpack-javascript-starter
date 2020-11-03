import './styles.scss';
import { render } from './app/test';

const $app = document.getElementById('app');

const $el = document.createElement('div');
$el.insertAdjacentHTML('beforeend', render());

$app.append($el);
