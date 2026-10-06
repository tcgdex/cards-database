import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 09"

const card: Card = {
    name: {
        en: "Fire Energy",
        fr: "Énergie Feu",
        es: "Energía Fuego",
        it: "Energia Fuoco",
        pt: "Energia de Fogo",
        de: "Feuer-Energie"
    },

    rarity: "Common",
    category: "Energy",
    set: Set,
    energyType: "Normal",

    variants: [
    	{
    		type: "normal",
    		stamp: ["player-rewards-program"],
    		thirdParty: {
    			cardmarket: 894236,
    		},
    	},
    	{
    		type: "holo",
    		stamp: ["player-rewards-program"],
    		thirdParty: {
    			cardmarket: 894237,
    		},
    	},
    ],

}

export default card
