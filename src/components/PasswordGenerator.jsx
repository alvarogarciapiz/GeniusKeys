import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import '../../src/styles/PasswordGenerator.css';

function PasswordGenerator() {
    const [useUppercase, setUseUppercase] = useState(true);
    const [useLowercase, setUseLowercase] = useState(true);
    const [useNumbers, setUseNumbers] = useState(true);
    const [useSpecialChars, setUseSpecialChars] = useState(true);
    const [length, setLength] = useState(16);
    const [password, setPassword] = useState('');


    const generatePassword = () => {
        const charset = {
            lowercase: 'abcdefghijklmnopqrstuvwxyz',
            uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
            numbers: '0123456789',
            specialChars: '!@#$%^&*()_-+=[]{};:,.<>?'
        };

        let selectedCharset = '';
        if (useLowercase) selectedCharset += charset.lowercase;
        if (useUppercase) selectedCharset += charset.uppercase;
        if (useNumbers) selectedCharset += charset.numbers;
        if (useSpecialChars) selectedCharset += charset.specialChars;

        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * selectedCharset.length);
            generatedPassword += selectedCharset[randomIndex];
        }

        setPassword(generatedPassword);
    };

    return (
        <div className='main'>
            <h1 className='title'>GeniusKeys 🔐</h1>
            <h2 className='subtitle'>Fortify Your Digital Realm: Passwords Crafted for Strength.</h2>
            <div>
                <input type="text" value={password} readOnly className='password' />
                <button className='buttonCopy' type="button" onClick={() => navigator.clipboard.writeText(password)}>
                    <FontAwesomeIcon icon={faCopy} />
                </button>
            </div>
            <button className='buttonGenerate' type="button" onClick={generatePassword}>Generar Contraseña</button>
            <form>
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <input type="checkbox" checked={useUppercase} onChange={e => setUseUppercase(e.target.checked)} />
                    Incluir mayúsculas
                </label>
                <br />
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <input type="checkbox" checked={useLowercase} onChange={e => setUseLowercase(e.target.checked)} />
                    Incluir minúsculas
                </label>
                <br />
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <input type="checkbox" checked={useNumbers} onChange={e => setUseNumbers(e.target.checked)} />
                    Incluir números
                </label>
                <br />
                <label style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <input type="checkbox" checked={useSpecialChars} onChange={e => setUseSpecialChars(e.target.checked)} />
                    Caracteres especiales
                </label>
                <br />
                <label>
                    Longitud:
                    <input type="number" value={length} onChange={e => setLength(e.target.value)} />
                </label>
            </form>
        </div>
    );
}

export default PasswordGenerator;