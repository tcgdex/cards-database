import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Basic Metal Energy",
		'fr-fr': "Énergie Metal de base",
		'es-es': "Energía Metal Básica",
		'it-it': "Energia base Metal",
		'pt-br': "Energia Metal Básica",
		'de-de': "Basis-Metal-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Metal"],
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 560410
			}
		},
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 780994
			}
		},
	],
}

export default card
