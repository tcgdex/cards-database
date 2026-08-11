import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Énergie Psychic de base",
		'en-us': "Basic Psychic Energy",
		'es-es': "Energía Psychic Básica",
		'it-it': "Energia base Psychic",
		'pt-br': "Energia Psychic Básica",
		'de-de': "Basis-Psychic-Energie"
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
