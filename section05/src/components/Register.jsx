// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

import { useState, useRef } from "react";

const Register = () => {
    const [name, setName] = useState("이름");
    const [birth, setBirth] = useState("");
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        setName(e.target.value);
    };

    const onChangeBirth = (e) => {
        setBirth(e.target.value);
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    // 위에 반복되는 state를 하나로 합쳐 객체로 생성
    const [input, setInput] = useState({
        name2: "",
        birth2: "",
        country2: "",
        bio2: ""
    });

    // useRef
    const countRef = useRef(0);
    const inputRef = useRef();

    const onChangeName2 = (e) => {
        setInput({
            ...input,
            name2 : e.target.value
        });
    };

    const onChangeBirth2 = (e) => {
        setInput({
            ...input,
            birth2 : e.target.value
        });
    };

    const onChangeCountry2 = (e) => {
        setInput({
            ...input,
            country2 : e.target.value
        });
    };

    const onChangeBio2 = (e) => {
        setInput({
            ...input,
            bio2 : e.target.value
        });
    };

    // let count = 0;
    // 위에 onChange.. 함수를 통합시키기
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        // count++;
        // console.log(count);
        setInput({
            ...input,
            [e.target.name] : e.target.value
        });
    };

    const onSubmit = () => {
        if(input.name2 === "") {
            // 이름을 입력하는 DOM 요소 포커스
            inputRef.current.focus();
        }
    };

    return (
        <div>
            <div>
                <input 
                    value={name} 
                    onChange={onChangeName} 
                    placeholder={"이름"} 
                />
                {name}
            </div>
            <div>
                <input 
                    type="date"
                    onChange={onChangeBirth}
                    value={birth}
                />
                {birth}
            </div>
            <div>
                <select value={country} onChange={onChangeCountry}>
                    <option value="">      </option>
                    <option value="kr"> 한국 </option>
                    <option value="us"> 미국 </option>
                    <option value="uk"> 영국 </option>
                </select>
                {country}
            </div>
            <div>
                <textarea
                    value={bio}
                    onChange={onChangeBio}
                />
                {bio}
            </div>

            <br />

            <div>
                <input 
                    value={input.name2} 
                    onChange={onChangeName2} 
                    placeholder={"이름"} 
                />
                {input.name2}
            </div>
            <div>
                <input 
                    type="date"
                    onChange={onChangeBirth2}
                    value={input.birth2}
                />
                {input.birth2}
            </div>
            <div>
                <select value={input.country2} onChange={onChangeCountry2}>
                    <option value="">      </option>
                    <option value="kr"> 한국 </option>
                    <option value="us"> 미국 </option>
                    <option value="uk"> 영국 </option>
                </select>
                {input.country2}
            </div>
            <div>
                <textarea
                    value={input.bio2}
                    onChange={onChangeBio2}
                />
                {input.bio2}
            </div>

            <br />

            <div>
                <input 
                    ref={inputRef}
                    name="name2"
                    value={input.name2} 
                    onChange={onChange} 
                    placeholder={"이름"} 
                />
                {input.name2}
            </div>
            <div>
                <input 
                    type="date"
                    name="birth2"
                    onChange={onChange}
                    value={input.birth2}
                />
                {input.birth2}
            </div>
            <div>
                <select name="country2" value={input.country2} onChange={onChange}>
                    <option value="">      </option>
                    <option value="kr"> 한국 </option>
                    <option value="us"> 미국 </option>
                    <option value="uk"> 영국 </option>
                </select>
                {input.country2}
            </div>
            <div>
                <textarea
                    name="bio2"
                    value={input.bio2}
                    onChange={onChange}
                />
                {input.bio2}
            </div>

            <button onClick={onSubmit}>
                제출
            </button>
        </div>
    );
};

export default Register;