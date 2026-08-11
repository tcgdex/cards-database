import { Card } from "../../../interfaces"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		fr: "Énergie Psychic de base",
		en: "Basic Psychic Energy",
		es: "Energía Psychic Básica",
		it: "Energia base Psychic",
		pt: "Energia Psychic Básica",
		de: "Basis-Psychic-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Psychic"],
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 733802,
				tcgplayer: 517053,
				cardtrader: 261385
			}
		},
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 733802
			}
		},
	],

	
}

export default card
