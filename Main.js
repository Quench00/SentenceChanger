var cB = $("#cB").click(function(){
				convertSentence();
			});

var copyB = $("#copyB").click(function(){
				copyToClipboard();
			});

var sentence="";
var subsentence="";

var length=0;

var resultSentence="";


function convertSentence() //funkcja "nadrzędna", obrabia string
{
	//alert("button clicked!");

	resultSentence="";
	
	sentence=$('#mF').val();
	
	//alert(sentence);
	
	sentence=addSpaceAfterDot(sentence);
	
	//alert(sentence);
	

	
	var strings = sentence.split(" ");
	
	//alert(strings);
	
	var numOfWords=strings.length;
	//alert(numOfWords);

	for(i=0; i<numOfWords; i++)
	{
            strings[i]=strings[i].toString();
			alert(strings[i]);
	}
	
	for(i=0; i<numOfWords; i++)
	{
			
          if(!isNaN(strings[i])&&strings[i]>100)
          {
            strings[i]="";
          }
          else if(!isNaN(strings[i])&&strings[i]<100)
          {
            strings[i]=strings[i];
          }
          else if(strings[i].includes("."))
          {
            strings[i]=strings[i];
          }
          else if(strings[i].includes("-"))
          {
            let analyse=strings[i].split("-");
            if(analyse[2]===undefined)
             {
                 if(!isNaN(analyse[0]) && !isNaN(analyse[1]) && analyse[0]<300 && analyse[1]<300)
                 {
                   
                 }
                 else 
                 {
                   strings[i]="";
                 }
             }
              else
             {
                strings[i]="";
             }
          } 
          else if(lookForNums(strings[i]))
          {
            strings[i]="";
          }
			if(strings[i]!="")
			{
        resultSentence+=strings[i]+" ";
			}
			
	}
	resultSentence.trim();
	$("#rF").val(resultSentence);
}




function addSpaceAfterDot(string) // dodaje spację po każdej kropce, można łatwiej przez string.replaceAll('.', '. '), ale czemu by się nie pomęczyć xd
{
	length=string.length;
	
	for(i=0; i<length; i++)
	{
		if(string[i]==".")
		{
			subsentence+="."+" ";
		}
		else
		{
			subsentence+=string[i];
		}	
	}
	
	string=subsentence;
	subsentence="";
	
	return string;
	//alert(string);
}


function copyToClipboard() //kopiuje element do schowka
{
    var inp=document.createElement('input');
    document.body.appendChild(inp)
    inp.value=$('#rF').val();
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
	
	//alert("copied:"+$('#rF').val());
}

function lookForNums(string) // szuka cyfr w stringu, jeśli string zawiera to zwraca 'true'
{
	var check=/\d/g;
	return check.test(string);
}


//dokończyć additional changes, dodać button odpowiedzialny za dodawanie kolejnych zmian