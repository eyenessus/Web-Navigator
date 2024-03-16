export default class NodeM implements INode{
    data: any
    next: INode | null
    previous: INode | null
    
    constructor(data: any) {
        this.data = data;
        this.next = null;
        this.previous = null;
    }

    setNextNode(node: INode | null) {
        if (node) {
            this.next = node;
            return
        } 
        this.next = null;
    }

    setPreviousNode(node: INode | null) {
        if (node) {
            this.previous = node;
            return 
        } 
        this.previous= null;
    }

    getNextNode() {
        return this.next;
    }

    getPreviousNode() {
        return this.previous;
    }
}

