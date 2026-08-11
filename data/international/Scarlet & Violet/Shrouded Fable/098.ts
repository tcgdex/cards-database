import { Card } from "models/database/card"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Basic Darkness Energy",
		'fr-fr': "Énergie Darkness de base",
		'es-es': "Energía Darkness Básica",
		'it-it': "Energia base Darkness",
		'pt-br': "Energia Darkness Básica",
		'de-de': "Basis-Darkness-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	types: ["Darkness"],
	energyType: "Normal",


	

	variants: [
		{
			type: 'holo',
			thirdParty: {
				tcgplayer: 560409
			}
		},
		{
			type: 'holo',
			foil: 'gold',
			thirdParty: {
				cardmarket: 780993
			}
		},
	],
}

export default card
