import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addAd } from './redux/actions';

function AddAdForm() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();// форма для отправление

    const handleSubmit = (e) => {
        e.preventDefault();

        // Проверяем, не пуст ли ввод
        if (text.trim() === '') {
            // Если ввод пустой, завершаем функцию
            return;
        }

        // Отправляем действие redux для добавления объявления
        dispatch(addAd(text));

        // Очищаем поле ввода
        setText('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="напиши текст"
            />
            <button type="submit">Добавить</button>
        </form>
    );
}

export default AddAdForm;
