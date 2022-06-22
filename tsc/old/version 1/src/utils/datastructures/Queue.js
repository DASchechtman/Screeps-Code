"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queue = void 0;
class Queue {
    constructor() {
        this.m_Stack = [];
    }
    AccessIndex() {
        return 0;
    }
    Push(el) {
        this.m_Stack.push(el);
    }
    Peek() {
        let item = null;
        if (this.m_Stack.length > 0) {
            const index = this.AccessIndex();
            item = this.m_Stack[index];
        }
        return item;
    }
    Pop() {
        let item = null;
        if (this.m_Stack.length > 0) {
            const index = this.AccessIndex();
            item = this.m_Stack[index];
            this.m_Stack.splice(index, 1);
        }
        return item;
    }
    Size() {
        return this.m_Stack.length;
    }
    Clear() {
        this.m_Stack = [];
    }
    IsEmpty() {
        return this.m_Stack.length === 0;
    }
}
exports.Queue = Queue;