import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 04"

const card: Card = {
    name: {
        en: "Lightning Energy",
        fr: "Énergie Electrik",
        es: "Energía Rayo",
        it: "Energia Lampo",
        pt: "Energia de Raios",
        de: "Elektro-Energie"
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
				cardmarket: 827292,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 756420,
			},
		},
	]


}

export default card
