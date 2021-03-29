document.addEventListener("change",taraftar);

function taraftar(){
    const liste=document.getElementById("slcttakim");
    
    let secim=liste.options[liste.selectedIndex].value;
    console.log(secim);

    let poster=document.getElementById("poster");
    let soz=document.getElementById("soz");

    if(secim=="FB")
    {
        poster.setAttribute("src","resim/resim1.jpg")
        soz.innerHTML="Milyonlarca taraftar yan yana, bağırıyorlar hep beraber kol kola! Adınla, takımınla, taraftarınla, en büyük sensin kanarya!";
    }
    if(secim=="SMS")
    {
        poster.setAttribute("src","resim/resim2.jpg")
        soz.innerHTML=" Dünya Dikenli bir Hayat Sevenlerdemi Kabahat nede olsa SamsunLuyuz";
    }
    if(secim=="GS")
    {
        poster.setAttribute("src","resim/resim3.jpg")
        soz.innerHTML=" Adana Ceyhan herkes cim bomlu ha de sen de uyan.";
    }
    if(secim=="BS")
    {
        poster.setAttribute("src","resim/resim4.jpg")
        soz.innerHTML=" Herkes yaşayamaz hayatı siyah beyaz çünkü Beşiktaş yürek ister biraz!";
    }
    if(secim=="TB")
    {
        poster.setAttribute("src","resim/resim5.jpg")
        soz.innerHTML="Hey Gidi Hamsi HEEEYYY!!!";
    }
}