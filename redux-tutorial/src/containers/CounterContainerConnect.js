import React from 'react';
import Counter from '../components/Counter';
import {connect} from 'react-redux';
import {increase, decrease} from '../modules/counter';

//redux에서 제공하는 함수로 목록에 있는 것들을 뒤의 항목으로 묶은 듯한 효과를 줌
import { bindActionCreators } from 'redux';

//props는 비구조화 할당
const CounterContainerConnect = ({number, increase, decrease}) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

//리덕스의 스토어의 상태값을 props로 넘겨주기 위한 함수 정의
//매개변수 state는 스토어에 저장되어 있는 상태 값
/* const mapStatetoProps = (state) => ({
  number: state.counter.number,
});

//리덕스의 액션 생성함수를 props로 넘겨주기 위한 함수 정의
//매개변수 dispatch는 스토어의 내장함수
const mapDispatchtoProps = (dispatch) => ({
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

//connect 함수로 이 컴포넌트가 리덕스와 화면 컴포넌트를 연결해주는 컴포넌트로 설정

export default connect(mapStatetoProps, mapDispatchtoProps)(CounterContainer); */

export default connect(
    (state) => ({
        number:state.counter.number,
    }),
    /* (dispatch) => ({
        increase: () => {
            dispatch(increase())
        },
        decrease: () => {
            dispatch(decrease())
        }
    }) */
    (dispatch) => bindActionCreators({increase,decrease}, dispatch)
)(CounterContainerConnect);
