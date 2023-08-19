const button=document.getElementById('btn')
const colortext=document.getElementsByClassName(".color")

// generated an array to generate random hec value
const hex=['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F']


// a function which will generate random index of array
function generaterandomnumber()
{
    return Math.floor(Math.random()*hex.length)
}


// generating a random hex number
function generatehexcolour()
{
    let hecol='#';
    for(let i=0;i<6;i++)
    {
        hecol+=hex[generaterandomnumber()]
    }
    return hecol

}
function handleclick()
{
    const hexcolour=generatehexcolour();
    document.body.style.backgroundColor=hexcolour
    colortext.textContent=hexcolour

}
// add event listener
button.addEventListener('click',handleclick)
