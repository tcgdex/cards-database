import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	set: Set,

	name: {
		'fr-fr': "Énergie Grass de base",
		'en-us': "Basic Grass Energy",
		'es-es': "Energía Grass Básica",
		'it-it': "Energia base Grass",
		'pt-br': "Energia Grass Básica",
		'de-de': "Basis-Grass-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Grass"],
	energyType: "Normal",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 715753,
				tcgplayer: 497700,
				cardtrader: 248913
			}
		},
	],

	
}

export default card
