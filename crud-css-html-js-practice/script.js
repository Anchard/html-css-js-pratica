var globalRowReference;

function funcFormSubmit(){
    console.log('1) ---> funcFormSubmit()');
    if(globalRowReference) funcSaveEdition();
    else setFuncIntoFuncTable();
}

function getFuncFormReferences(){
    console.log('2) ---> getFuncFormReferences()');
    let func = {};
    func['nome'] = document.getElementById('funcNome');
    func['salario'] = document.getElementById('funcSalario');
    func['lotacao'] = document.getElementById('funcLotacao');

    console.log('@getFuncFormReferences: ', func);
    return func;
}

function getFuncTableReferences(){
    console.log('3) ---> getFuncTableReferences()');
    let table = {};
    table['full'] = document.getElementById('funcTable');
    table['body'] = table.full.getElementsByTagName('tbody')[0];

    console.log('@getFuncTableReferences: ', table);
    return table;
}

function setFuncIntoFuncTable(){
    console.log('4) ---> setFuncIntoFuncTable()');
    let func = getFuncFormReferences();
    let table = getFuncTableReferences();
    let newRow = table.full.insertRow(table.full.length);

    let funcNomeTd = newRow.insertCell(0);
    funcNomeTd.innerHTML = func.nome.value;
    let funcSalarioTd = newRow.insertCell(1);
    funcSalarioTd.innerHTML = func.salario.value;
    let funcLotacaoTd = newRow.insertCell(2);
    funcLotacaoTd.innerHTML = func.lotacao.value;
    let funcOpcaoTd = newRow.insertCell(3);
    funcOpcaoTd.innerHTML = `<button onclick="funcEditButtonPressed(this);">!</button>
                            <button onclick="funcDeleteButtonPressed(this);">X</button>`;

    resetFuncForm();
}

function resetFuncForm(){
    console.log('5) ---> resetFuncForm()');
    let func = getFuncFormReferences();
    func.nome.value = '';
    func.salario.value = '';
    func.lotacao.value = '';
}

function funcEditButtonPressed(td){
    console.log('6) ---> funcEditButtonPressed(this)');
    let func = getFuncFormReferences();
    let row = td.parentElement.parentElement;

    func.nome.value = row.cells[0].innerHTML;
    func.salario.value = row.cells[1].innerHTML;
    func.lotacao.value = row.cells[2].innerHTML;
    globalRowReference = row;
    console.log('@funcEditButtonPressed: ', globalRowReference);
}

function funcSaveEdition(){
    console.log('6) ---> funcSaveEdition(this)');
    func = getFuncFormReferences();
    globalRowReference.cells[0].innerHTML = func.nome.value;
    globalRowReference.cells[1].innerHTML = func.salario.value;
    globalRowReference.cells[2].innerHTML = func.lotacao.value;

    globalRowReference = undefined;
}

function funcDeleteButtonPressed(td){
    console.log('7) ---> funcDeleteButtonPressed(this)');
    let table = getFuncTableReferences();
    row = td.parentElement.parentElement;

    alert('O funcionário e todas as suas informações serão deletados!');
    table.full.deleteRow(row.rowIndex);
}