import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Basic Fighting Energy",
		'fr-fr': "Énergie Fighting de base",
		'es-es': "Energía Fighting Básica",
		'it-it': "Energia base Fighting",
		'pt-br': "Energia Fighting Básica",
		'de-de': "Basis-Fighting-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	energyType: "Normal",
	types: ["Fighting"],

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
        cardmarket: 702554,
        tcgplayer: 490294
    }
}

export default card
