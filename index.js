//Crear clase grafo
class Graph {
    //defining vertex array and adjacent list
    constructor(noOfVertices) {
        this.noOfVertices = noOfVertices;
        this.AdjList = new Map();
    }
    // add vertex to the graph
    addVertex(v) {
        //initialize the adjacent list with a null
        this.AdjList.set(v, []);
    }
    // add edge
    addEdge(v, w) {
        //get the list for vertex v and put the 
        //vertex w denoting edge between v and w
        this.AdjList.get(v).push(w);
        //Since graph is undirected 
        //add an edge from w to v also
        //Si solo se agrega un add edge, solo 
        //se esta haciendo unidireccional 
        //si se colocan las dos se hace bidireccional
        this.AdjList.get(w).push(v);
    }
    //Prints the vertex and adjacency list
    printGraph() {
        //get all the vertices
        var get_keys = this.AdjList.keys();
        //keys es un metodo en el que se regresa un valor de llaves 
        ////[{“A”,[{“A”,“B”},{“A”,“C”}]}, {“B”,[{“B”,“A”}]}, {“C”,[{“C”,“A”}]}, {“D”,[]}, {“E”,[]}, {“F”,[]}]
        //]
        //["A", "B",...]

    
        //iterate over the vertices
        for (var i of get_keys) {
            //get the corresponding adjacency list for the vertex
            var get_values = this.AdjList.get(i);
            var conc = "";
            //iterate over the adjacency list concatenate the values into a string
            for (var j of get_values) conc += j + " ";
            //print the vertex and its adjacency list
            console.log(i + " -> " + conc);
        }
    }
}

//Using the above implemented graph class
var g = new Graph(9);
var vertices = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I' ];
//adding  vertices
for (var i = 0; i < vertices.length; i++){
    g.addVertex(vertices[i]); //instancia de la clase graph. Un objeto es la instancia de un clase 
}

//adding Edges
g.addEdge('A', 'B');
g.addEdge('A', 'D');
g.addEdge('A', 'G');
g.addEdge('B', 'C');
g.addEdge('B', 'E');
g.addEdge('B', 'I');
g.addEdge('C', 'F');
g.addEdge('C', 'I');
g.addEdge('D', 'G');
g.addEdge('E', 'G');
g.addEdge('E', 'H');
g.addEdge('F', 'I');
g.addEdge('G', 'H');
g.addEdge('H', 'I');

g.printGraph();