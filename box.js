function gap() {
    let v = document.getElementById("gap").value;
    let g = document.getElementById("flCon");
    g.style.gap = `${v}px`;
    console.log(`Gap: ${g.style.gap}`);
}

function setflxdirect(v) {
    let d = document.getElementById("flCon");
    d.style.flexDirection= v;
    console.log(`Flex-direction: ${d.style.justifyContent}`);
}

function setjustifycont(v) {
    let j = document.getElementById("flCon");
    j.style.justifyContent = v;
    console.log(`Justify-Content: ${v.style.justifyContent}`);
}

function setalignitems(v) {
    let x = document.getElementById("flCon");
    x.style.alignItems = v;
    console.log(`Align-Items: ${x.style.alignItems}`);
}

function setflxgrow(v) {
    let grow1 = document.getElementById("grow-b1").value;
    let grow2 = document.getElementById("grow-b2").value;
    let grow3 = document.getElementById("grow-b3").value;
    let box1 = document.getElementById("item1");
    let box2 = document.getElementById("item2");
    let box3 = document.getElementById("item3");
  
    if (v == 1) {
        box1.style.flexGrow = grow1;
    } else if (v == 2) {
        box2.style.flexGrow = grow2;
    } else if (v == 3) {
        box3.style.flexGrow = grow3;
    } else if (v == 4) {
        box1.style.flexGrow = grow1;
        box2.style.flexGrow = grow2;
        box3.style.flexGrow = grow3;
    } else if (v == 0) {
        box1.style.flexGrow = '0';
        box2.style.flexGrow = '0';
        box3.style.flexGrow = '0';
    }
    console.log(`Flex-Grow of Box 1: ${box1.style.flexGrow}`);
    console.log(`Flex-Grow of Box 2: ${box2.style.flexGrow}`);
    console.log(`Flex-Grow of Box 3: ${box3.style.flexGrow}`);
}

function resetbox() {
    let f = document.getElementById("flCon");
    f.style.gap = '0';
    document.getElementById("gap").value = '0';
    
    f.style.flexDirection = "row";
    f.style.justifyContent = "flex-start";
    f.style.alignItems = "flex-start";
    
    document.getElementById("grow-b1").value = '0';
    document.getElementById("grow-b2").value = '0';
    document.getElementById("grow-b3").value = '0';
    
    let box1 = document.getElementById("item1");
    let box2 = document.getElementById("item2");
    let box3 = document.getElementById("item3");
    
    box1.style.flexGrow = '0';
    box2.style.flexGrow = '0';
    box3.style.flexGrow = '0';
}
