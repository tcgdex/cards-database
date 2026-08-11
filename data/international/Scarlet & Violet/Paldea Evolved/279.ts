import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Énergie Water de base",
		'en-us': "Basic Water Energy",
		'es-es': "Energía Water Básica",
		'it-it': "Energia base Water",
		'pt-br': "Energia Water Básica",
		'de-de': "Basis-Water-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Water"],
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715754,
				tcgplayer: 497701,
				cardtrader: 248914
			}
		},
	],

	
}

export default card
