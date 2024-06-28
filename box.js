function gap() {
    let v = document.getElementById("gap").value;
    let g = document.getElementById("flCon");
    g.style.gap = `${v}px`;
    console.log(`Gap: ${g.style.gap}`);
}

function setflxdirect(v) {
    let d = document.getElementById("flCon");
    d.style.flexDirection = v === 1 ? "row" : "column";
    console.log(`Flex-Direction: ${d.style.flexDirection}`);
}

function setjustifycont(v) {
    let j = document.getElementById("flCon");
    j.style.justifyContent = v;
    console.log(`Justify-Content: ${j.style.justifyContent}`);
}

function setalignitems(v) {
    let a = document.getElementById("flCon");
    if (v == 1) {
        a.style.alignItems = "start";
    } else if (v == 2) {
        a.style.alignItems = "center";
    } else if (v == 3) {
        a.style.alignItems = "end";
    }
    console.log(`Align-Items: ${a.style.alignItems}`);
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
    let r = document.getElementById("flCon");
    r.style.gap = '0';
    document.getElementById("gap").value = '0';
    r.style.flexDirection = "row";
    r.style.justifyContent = "flex-start";
    r.style.alignItems = "flex-start";

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
