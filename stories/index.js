import { storiesOf } from '@storybook/html';

import content from './hoge.html';
import "./hoge.scss";
import readme from './README.md';

storiesOf('Button', module)
    .add('直接書く', () => '<button class="btn">Hello World</button>')
    .add('JSで書く', () => {
        const button = document.createElement('button');
        button.innerText = '😀 😎 👍 💯';
        return button;
    })
    .add('ファイルから読み込む', () => content)
    .add('README読み込む', () => readme)
;
