imMaxCh=34;//�@�ő�摜��
imX=new Array(imMaxCh);//�@�摜�̍��W
imY=new Array(imMaxCh);
imH=new Array(imMaxCh);//�@�x�������ւ̉����x
var imWx;
var imWy;//�@�E�C���h�E�̕��ƍ���
bw=0;//�@�u���E�U�`�F�b�N

for(var i=0;i<imMaxCh;i++)
{
   var j=Math.floor(Math.random()*8);
   document.write("<img src='snow.gif' style='position:absolute;left:-200px;' name='imch"+i+"'>");
}
imgInit();
function imgInit()//�@�����ݒ�
{
  if(document.getElementById){bw=1;}// �l�X�P�U�`�@IE�T�`�Ȃ�^
  if((document.all)&&(bw==1)){bw=2;}//�@IE�S�`�Ȃ�^
  if(bw==0)
   {
      alert("�u���E�U�o�[�W�������Ή����Ă��܂���\n�ŐV�̃u���E�U�ɍX�V���Ă�������\n�����o�[�W����(NN6�`,IE5�`)\n�@�@�@�@+1JavaScript");
      return;
   }
   imMxSet();
   for(var i=0;i<imMaxCh;i++)//�@�摜�̕ϐ��̏����ݒ�
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

function imMxSet()//�@�E�C���h�E�����T�C�Y�������ɃE�C���h�E�̕��ƍ������擾
{
   if(bw==1)//�@�l�X�P�̏ꍇ
   {
      imWx=window.innerWidth+window.pageXOffset-15;
      imWy=window.innerHeight+window.pageYOffset;
   }
   if(bw==2)//�@IE�̏ꍇ
   {
      imWx=window.document.body.clientWidth+document.body.scrollLeft;
      imWy=window.document.body.clientHeight+document.body.scrollTop;
   }
}




function imMain()//�@���C�����[�`��
{
   var x,y;
   imMxSet();
   for(var i=0;i<imMaxCh;i++)
   {
      imY[i]+=imH[i];
      if(imY[i]>imWy)//�@��ʂ�����������ɖ߂�
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
      document.images["imch"+i].style.left=x;//�@�摜�̍��W�̕ύX
      document.images["imch"+i].style.top=y;
   }
   if(bw==2){setTimeout("imMain()",35);}else{setTimeout("imMain()",10);}//�@��������
}