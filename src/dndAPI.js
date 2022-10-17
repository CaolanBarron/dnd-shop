
export async function getEquipmentCategories(){
    const response = await fetch('https://www.dnd5eapi.co/api/equipment-categories');
    const myJson = await response.json();

    return myJson;
}

export async function getEquipment(url){
    const response = await fetch('https://www.dnd5eapi.co' + url);
    const myJson = await response.json();
    return myJson;
} 


