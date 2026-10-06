import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 09"

const card: Card = {
    name: {
        en: "Fighting Energy",
        fr: "Énergie Combat",
        es: "Energía Lucha",
        it: "Energia Lotta",
        pt: "Energia de Luta",
        de: "Kampf-Energie"
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
    			cardmarket: 894244,
    		},
    	},
    	{
    		type: "holo",
    		stamp: ["player-rewards-program"],
    		thirdParty: {
    			cardmarket: 894245,
    		},
    	},
    ],

}

export default card
