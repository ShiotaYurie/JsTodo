
// 追加ボタンを押した時（発火）のイベントの処理関数① ③ ④ ⑤
const onClickAdd = () => {
    // alert(); テスト用
    //③テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value //inputエリアのテキストを受け取る
    document.getElementById("add-text").value = "";//入力値を初期化（空にする）
    createIncompleteList(inputText);
}


//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);//消す場所と内容指定(ulの下)
}

//未完成リストに追加する関数
const createIncompleteList = (text) => {
    //④取得した値のリスト生成
    //JS上でHTMLのdiv生成
    const div = document.createElement("div");
    div.className = "list-row";

    //liタグ生成
    const li = document.createElement("li");
    li.innerText = text //liの中に取得したテキスト（入力値）を設定

    //button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了"
    //イベント処理
    completeButton.addEventListener("click", () => {
        //押された完了ボタンの親タグ(div)を未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode);
        // const deleteTarget = completeButton.parentNode;//親要素取得(list-row)
        
        //完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        //Todo内容テキストを取得
        const text = addTarget.firstElementChild.innerText

        //div以下を初期化
        addTarget.textContent = null;

        //liタグ生成
        const li = document.createElement("li");
        li.innerText = text;

        //buttonタグ生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () =>{
            //押された戻すボタンの親タグ（div）を完了リストから削除
            const deleteTarget = backButton.parentNode; //入力値
            document.getElementById("complete-list").removeChild(deleteTarget);
            // document.getElementById("incomplete-list").appendChild(div);
                    //テキスト取得
        const text = backButton.parentNode.firstElementChild.innerText;
        createIncompleteList(text);
        console.log(text);

        });
    //divタグの子要素に各要素を設定
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    //完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
    });

    

    //button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除"
    deleteButton.addEventListener("click", () => {
        //押された削除ボタンの親タグ(div)を未完了リストから削除
        deleteFromIncompleteList(deleteButton.parentNode);
        // const deleteTarget = deleteButton.parentNode;//親要素取得(list-row)
    });

   
    //⑤表示エリア設定
    //divタグの子要素に各要素を設定（表示エリア）
    div.appendChild(li);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);

    //ulタグを生成しリストをラップする（未完了リストに追加）表示される
    document.getElementById("incomplete-list").appendChild(div);
}

//add-buttonのidにイベント付与（設定）②
document
    .getElementById("add-button")//id指定
    .addEventListener("click",() => onClickAdd()); //クリックイベント付与、実行する処理(onClicAdd)を渡す

