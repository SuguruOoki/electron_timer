
var timer1; //タイマーを格納する変数（タイマーID）の宣言
//カウントダウン関数を1000ミリ秒毎に呼び出す関数
var def_min = "0";
var def_sec = "0";
var countdownflag = "0";

function timerButtonPassive(){
  document.timer.elements[2].disabled=true;
  document.timer.elements[3].disabled=true;
  document.timer.elements[4].disabled=true;
  document.timer.elements[5].disabled=true;
}


function timerButtonActive(){
  document.timer.elements[2].disabled=false;
  document.timer.elements[3].disabled=false;
  document.timer.elements[4].disabled=false;
  document.timer.elements[5].disabled=false;
}

function controlButtonPassive(){
  document.timer.elements[6].disabled=true;
  document.timer.elements[7].disabled=true;
  document.timer.elements[8].disabled=true;
  document.timer.elements[9].disabled=true;
}


function controlButtonActive(){
  document.timer.elements[6].disabled=false;
  document.timer.elements[7].disabled=false;
  document.timer.elements[8].disabled=false;
  document.timer.elements[9].disabled=false;
}


function cntStart()
{

  timerButtonPassive();
  if(countdownflag === "0"){
    countdownflag = "1";
    //リセットを押した時用の時間を保存
    def_min = document.timer.elements[0].value;
    def_sec = document.timer.elements[1].value;
    timer1=setInterval("countDown()",1000);
  }else{alert("もう実行済みです");}
}

//タイマー停止関数
function cntStop()
{

  timerButtonActive();
  clearInterval(timer1);
  countdownflag = "0";
}

//タイマーリセット関数
function Reset()
{
  timerButtonActive();
  document.timer.elements[0].value=def_min;
  document.timer.elements[1].value=def_sec;
  clearInterval(timer1);
  countdownflag = "0";
}


//タイマーに10分加算
function Set10minites()
{
  if(document.timer.elements[0].value == ""){
    document.timer.elements[0].value = "0";
    var min=parseInt(document.timer.elements[0].value)+10;
  }
  else{var min=parseInt(document.timer.elements[0].value)+10;}
  document.timer.elements[0].value=min.toString();
  controlButtonActive();
  countdownflag = "0";
}
//タイマーに1分加算
function Set1minite()
{
  if(document.timer.elements[0].value == ""){
    document.timer.elements[0].value = "0";
    var min=parseInt(document.timer.elements[0].value)+1;
  }
  else{var min=parseInt(document.timer.elements[0].value)+1;}
  document.timer.elements[0].value=min.toString();
  controlButtonActive();
  countdownflag = "0";
}
//タイマーに10秒加算
function Set10seconds()
{
  if(document.timer.elements[1].value === ""){
    document.timer.elements[1].value = "0";
    var sec=parseInt(document.timer.elements[1].value)+10;
  }
  else{var sec=parseInt(document.timer.elements[1].value)+10;}
  if(document.timer.elements[0].value === ""){
    document.timer.elements[0].value = "0";
  }
  //残り分数はintを60で割って切り捨てる
  document.timer.elements[0].value=(parseInt(document.timer.elements[0].value)+parseInt(sec/60)).toString();
  //残り秒数はintを60で割った余り
  document.timer.elements[1].value=sec % 60;
  //document.timer.elements[1].value=sec.toString();
  controlButtonActive();
  countdownflag = "0";
}
//タイマーに1秒加算
function Set1second()
{
  if(document.timer.elements[1].value == ""){
    document.timer.elements[1].value = "0";
    var sec=parseInt(document.timer.elements[1].value)+1;
  }
  else{var sec=parseInt(document.timer.elements[1].value)+1;}
  //分の方がから文字になっている場合0を代入しておく
  if(document.timer.elements[0].value === ""){
    document.timer.elements[0].value = "0";
  }
  //残り分数はintを60で割って切り捨てる
  document.timer.elements[0].value=(parseInt(document.timer.elements[0].value)+parseInt(sec/60)).toString();
  //残り秒数はintを60で割った余り
  document.timer.elements[1].value=sec % 60;
  //document.timer.elements[1].value=sec.toString();
  controlButtonActive();
  countdownflag = "0";
}

//カウントダウン関数
function countDown()
{
  var min=document.timer.elements[0].value;
  var sec=document.timer.elements[1].value;

  if( (min=="") && (sec=="") )
  {
    alert("時刻を設定してください！");
    ResetZero();
  }
  else
  {
    if (min=="") min=0;
    min=parseInt(min);

    if (sec=="") sec=0;
    sec=parseInt(sec);

    tmWrite(min*60+sec-1);
  }
}

//残り時間を書き出す関数
function tmWrite(int)
{
  int=parseInt(int);
  
  if (int<=0)
  {
    reSet();
    alert("時間です！");
  }
  else
  {
    //残り分数はintを60で割って切り捨てる
    document.timer.elements[0].value=Math.floor(int/60);
    //残り秒数はintを60で割った余り
    document.timer.elements[1].value=int % 60;
  }
}

//フォームを初期状態に戻す（リセット）関数
function ResetZero()
{
  document.timer.elements[0].value="0";
  document.timer.elements[1].value="0";
  timerButtonActive();
  clearInterval(timer1);
  countdownflag = "0";
}  