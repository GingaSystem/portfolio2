imMaxCh=34;//　最大画像数
imX=new Array(imMaxCh);//　画像の座標
imY=new Array(imMaxCh);
imH=new Array(imMaxCh);//　Ｙ軸方向への加速度
var imWx;
var imWy;//　ウインドウの幅と高さ
bw=0;//　ブラウザチェック

for(var i=0;i<imMaxCh;i++)
{
   var j=Math.floor(Math.random()*8);
   document.write("<img src='snow.gif' style='position:absolute;left:-200px;' name='imch"+i+"'>");
}
imgInit();
function imgInit()//　初期設定
{
  if(document.getElementById){bw=1;}// ネスケ６～　IE５～なら真
  if((document.all)&&(bw==1)){bw=2;}//　IE４～なら真
  if(bw==0)
   {
      alert("ブラウザバージョンが対応していません\n最新のブラウザに更新してください\n推奨バージョン(NN6～,IE5～)\n　　　　+1JavaScript");
      return;
   }
   imMxSet();
   for(var i=0;i<imMaxCh;i++)//　画像の変数の初期設定
   {
      imX[i]=Math.floor(Math.random()*imWx);
      imY[i]=Math.floor(Math.random()*imWy);
      var n=Math.floor(Math.random()*4)+1;
      switch(n)
      {
      case 1:
         imH[i]=8;
         document.images["imch"+i].height=6;
         document.images["imch"+i].width=6;
         break;
      case 2:
         imH[i]=12;
         document.images["imch"+i].height=8;
         document.images["imch"+i].width=8;
         break;
      case 3:
         imH[i]=16;
         document.images["imch"+i].height=10;
         document.images["imch"+i].width=10;
         break;
      default:
         imH[i]=6;
         document.images["imch"+i].height=4;
         document.images["imch"+i].width=4;
         break;
      }
   }
   imMain();
}

function imMxSet()//　ウインドウをリサイズした時にウインドウの幅と高さを取得
{
   if(bw==1)//　ネスケの場合
   {
      imWx=window.innerWidth+window.pageXOffset-15;
      imWy=window.innerHeight+window.pageYOffset;
   }
   if(bw==2)//　IEの場合
   {
      imWx=window.document.body.clientWidth+document.body.scrollLeft;
      imWy=window.document.body.clientHeight+document.body.scrollTop;
   }
}




function imMain()//　メインルーチン
{
   var x,y;
   imMxSet();
   for(var i=0;i<imMaxCh;i++)
   {
      imY[i]+=imH[i];
      if(imY[i]>imWy)//　画面から消えたら上に戻す
      {
         imX[i]=Math.floor(Math.random()*imWx);
      var n=Math.floor(Math.random()*5)+1;
         switch(n)
         {
         case 1:
            imH[i]=8;
            document.images["imch"+i].height=6;
            document.images["imch"+i].width=6;
            break;
         case 2:
            imH[i]=12;
            document.images["imch"+i].height=8;
            document.images["imch"+i].width=8;
            break;
         case 3:
            imH[i]=16;
            document.images["imch"+i].height=10;
            document.images["imch"+i].width=10;
            break;
         default:
            imH[i]=6;
            document.images["imch"+i].height=4;
            document.images["imch"+i].width=4;
            break;
         }
         imY[i]=-document.images["imch"+i].height;
      }
      x=imX[i];
      y=imY[i];
      if(bw==1){
         if(x>imWx-document.images["imch"+i].width-16){x=-100;}
      }else{
         if(x>imWx-document.images["imch"+i].width){x=-100;}
      }
      if(y>imWy-document.images["imch"+i].height){y=-100;}
      document.images["imch"+i].style.left=x;//　画像の座標の変更
      document.images["imch"+i].style.top=y;
   }
   if(bw==2){setTimeout("imMain()",35);}else{setTimeout("imMain()",10);}//　割込処理
}