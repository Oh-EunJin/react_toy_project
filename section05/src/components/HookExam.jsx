// 3가지 Hook 팁
// 1. 함수 컴포넌트, 커스텀 즉 내부에서만 호출 가능
// 2. 조건부로 호출될 수 없음
// 3. 나만의 훅(Custom Hook)을 직접 만들 수 있음

import useInput from "../hooks/useInput";

const HookExam = () => {
    const [input, onChange] = useInput();

    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    )
}

export default HookExam;