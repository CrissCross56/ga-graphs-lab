class Graph {
  constructor() {
    // Create a property called `nodes` and set it equal to an empty object.
    // This will be our adjacency list.

    //this is my adjacency list
    this.nodes = {
      //example of how it looks
      // a:[]
      // b:[]
      // c:[]
    }
  }

  addNode(node) {
    // If the node value passed in does not already exist in our adjacency
    // list, then add it as a key and set it equal to an empty array.
    if(!this.nodes[node]){
      this.nodes[node]=[];
    }
  }

  //add an edge between two existing nodes
  addEdge(node, edgeNode) {
    // If the node exists in our adjacency list, then push the edge into the
    // array of edges for that node.
    if(this.nodes[node] && this.nodes[edgeNode]){
      //create the edge connection between  nodes
      this.nodes[node].push(edgeNode)

      //pusing the node into the edgeNodes array shows an undirected graph
      // this.nodes[edgeNode].push(node)
    }
  }
}

const graph = new Graph()

graph.addNode("A")
graph.addNode("B")
graph.addNode("C")


graph.addEdge("A","B")
graph.addEdge("A","C")
graph.addEdge("C","A")
graph.addEdge("C","B")

console.log(graph)

module.exports = { Graph };
