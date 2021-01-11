# Movie App

React JS Fundamentals practice

# React JS Fundamentals

1. jsx & components & props
    - jsx => basic document obj in react
    - function components <- props as arg. 
        - props.name / props.image ... can be passed
    - class componenets => class - extends ReactComponent

    * how to check if props is passed: <prop-types>
        ex) {prop.anything} = PropTypes.string.isRequired

2. state
    - used when? dynamic data in class component
    * manipulate state: <setState()>
        need to call 'render' again
    - <current> get current state
        ex) this.setState(current => ({count: current.count-1}));

3. component life-cycle
    - Mounting: These methods are called in the following order when an instance of a component is being created and inserted into the DOM
        - <constructor()>
        - <render()>
        - <cmponentDidMount()>

    - Updating: An update can be caused by changes to props or state. These methods are called in the following order when a component is being re-rendered
        - <render()>
        - <componentDidUpdate()>
    
    - Unmount: This method is called when a component is being removed from the DOM
        - <componentWillUnmount()>

# making movie app

1. fetching api data: <axios>

2. wait for function: <async> - <await>

