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
	
	if(sentence.length<20)
          {
			let randomNum=Math.floor(Math.random()*10+1)
			switch(randomNum)
			{
				case 1:
				sentence="OKAZJA "+sentence;
				break;
				case 2:
				sentence="HIT "+sentence;
				break;
				case 3:
				sentence="NOWOŚĆ "+sentence;
				break;
				
				case 4:
				case 5:
				case 6:
				case 7:
				case 8:
				case 9:	
				case 10:
				sentence="HIT CENOWY "+sentence;
				break;
			}
            
          }
		  
	var strings = sentence.split(" ");

	
	//alert(strings);
	
	var numOfWords=strings.length;
	//alert(numOfWords);

	for(i=0; i<numOfWords; i++)
	{
            strings[i]=strings[i].toString();
			//alert(strings[i]);
	}
	
	for(i=0; i<numOfWords; i++)
	{
			
          if(!isNaN(strings[i])&&strings[i]>1000)
          {
            strings[i]="";
          }
          else if(!isNaN(strings[i])&&strings[i]<1000)
          {
            strings[i]=strings[i];
          }
		  else if(strings[i].toUpperCase().includes("SZT")||strings[i].includes(".")||strings[i].toUpperCase().includes("ML")||strings[i].toUpperCase().includes("CM")||strings[i].toUpperCase().includes("X")&&lookForNums(strings[i]))
		  {
			strings[i]=capitalizeFirstLetter(strings[i]);
		  }
		  else if(strings[i].toUpperCase()==="SUPER" || strings[i].toUpperCase()==="NOWOŚĆ" || strings[i].toUpperCase()==="KOMFORTOWA" || strings[i].toUpperCase()==="FRESH" || strings[i].toUpperCase()==="NATURAL"  || strings[i].toUpperCase()==="INVISIBLE"|| strings[i].toUpperCase()==="PURE" || strings[i].toUpperCase()==="BIG"|| strings[i].toUpperCase()==="KOMFORTOWY" || strings[i].toUpperCase()==="EXTRA" || strings[i].toUpperCase()==="SIZE" || strings[i].toUpperCase()==="NATURALNY" || strings[i].toUpperCase()==="XL" || strings[i].toUpperCase()==="WYGODNY" || strings[i].toUpperCase()==="KOMFORTOWY")
		  {
			  strings[i]=strings[i].toUpperCase();
		  }
		  else if(strings[i].toUpperCase()==="OKAZJA" ||strings[i].toUpperCase()==="ZOBACZ")
		  {
			  strings[i]=strings[i].toUpperCase();
			  strings[i]+="!";
		  }
          else if(strings[i].includes("-"))
          {
            let analyse=strings[i].split("-");
            if(analyse[2]===undefined)
             {
                 if(!isNaN(analyse[0]) && !isNaN(analyse[1]) && analyse[0]<300 && analyse[1]<300)
                 {
                   
                 }
                 else if(lookForNums(analyse[0])&&lookForNums(analyse[1])) 
                 {
                   strings[i]="";
                 }else 
                 {
                   strings[i]=capitalizeFirstLetter(strings[i]);
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
          }else strings[i]=capitalizeFirstLetter(strings[i]);
		  
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

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
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
