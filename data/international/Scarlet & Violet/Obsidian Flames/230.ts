import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Énergie Fire de base",
		'en-us': "Basic Fire Energy",
		'es-es': "Energía Fire Básica",
		'it-it': "Energia base Fire",
		'pt-br': "Energia Fire Básica",
		'de-de': "Basis-Fire-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Fire"],
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 725310,
				tcgplayer: 509992,
				cardtrader: 255670
			}
		},
	],

	
}

export default card
