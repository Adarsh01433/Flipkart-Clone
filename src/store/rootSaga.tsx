import homeSaga from "@modules/home/api/saga";
import { fork, all } from "redux-saga/effects";


export default function* rootSaga(){
    yield all([
        fork(homeSaga),
    ])
}