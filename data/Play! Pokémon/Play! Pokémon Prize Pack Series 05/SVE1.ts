import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 05"

const card: Card = {
    name: {
        en: "Grass Energy",
        fr: "Énergie Plante",
        es: "Energía Planta",
        it: "Energia Erba",
        pt: "Energia de Grama",
        de: "Pflanze-Energie"
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
				cardmarket: 782312,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 782313,
			},
		},
	]

}

export default card
