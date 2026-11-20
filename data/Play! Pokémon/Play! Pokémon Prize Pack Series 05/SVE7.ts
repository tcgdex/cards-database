import { Card } from '../../../interfaces'
import Set from "../Play! Pokémon Prize Pack Series 05"

const card: Card = {
    name: {
        en: "Darkness Energy",
        fr: "Énergie Obscurité",
        es: "Energía Oscura",
        it: "Energia Oscurità",
        pt: "Energia de Escuridão",
        de: "Finsternis-Energie"
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
				cardmarket: 782324,
			},
		},
		{
			type: "holo",
			stamp: ["player-rewards-program"],
			thirdParty: {
				cardmarket: 782325,
			},
		},
	]


}

export default card
