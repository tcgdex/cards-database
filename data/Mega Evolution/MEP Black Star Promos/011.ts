import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
    set: Set, 

    name: {
        en: "Mega Latias EX",
        fr: "Méga Latias EX", 
        de: "Mega Latias EX", 
        it: "Mega Latias EX",
        es: "Mega Latias EX",
        pt: "Mega Latias EX", 
    }, 

    illustrator: "5ban Graphics",
    rarity: "None", 
    category: "Pokemon",
    hp: 280, 
    types: ["Dragon"],
    stage: "Basic",
    dexId: [380], 

    attacks: [
        {
            cost: ["Colorless"],

            name: {
                en: "Strafe",
                fr: "Strafe", 
                de: "Strafe", 
                it: "Strafe",
                es: "Estratagema",
                pt: "Strafe", 
            },

            damage: 40, 

            effect: {
                en: "You may switch this Pokémon with 1 of your Benched Pokémon",
                fr: "Vous pouvez échanger ce Pokémon avec l’un de vos Pokémon de Banc", 
                de: "Du kannst dieses Pokémon gegen 1 Pokémon auf deiner Bank austauschen", 
                it: "Puoi scambiare questo Pokémon con uno dei tuoi Pokémon in panchina",
                es: "Puedes cambiar este Pokémon por 1 de tus Pokémon en Banca",
                pt: "Você pode trocar este Pokémon por 1 dos seus Pokémon no Banco",
            }
        },
        {
            cost: ["Fire", "Psychic", "Colorless"],

            name: {
                en: "Illusory Impulse",
                fr: "Impulsion Illusoire", 
                de: "Illusorischer Impuls", 
                it: "Impulso Illusorio",
                es: "Impulso Ilusorio",
                pt: "Descarte todas as Energias deste Pokémon",
            },

            damage: 300,

            effect: {
                en: "Discard all Energy from this Pokémon",
                fr: "Défaussez toute l’Énergie attachée à ce Pokémon", 
                de: "Lege alle an dieses Pokémon angelegten Energien auf deinen Ablagestapel", 
                it: "Scarta tutte le Energie assegnate a questo Pokémon",
                es: "Descarta todas las Energías de este Pokémon",
                pt: "Descarte todas as Energias deste Pokémon",
            }
        }
    ],

    retreat: 1,
    regulationMark: "I", 

    variants: [
        {
            type: "holo",
            thirdParty: {
                cardmarket: 851063,
                tcgplayer: 657846
            }
        }
    ]
}

export default card