import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 05"

const card: Card = {
    name: {
        en: "Water Energy",
        fr: "Énergie Eau",
        es: "Energía Agua",
        it: "Energia Acqua",
        pt: "Energia de Água",
        de: "Wasser-Energie"
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
				cardmarket: 782316,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 782317,
			},
		},
	]


}

export default card
