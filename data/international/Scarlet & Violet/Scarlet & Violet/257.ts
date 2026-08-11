import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Basic Lightning Energy",
		'fr-fr': "Énergie Lightning de base",
		'es-es': "Energía Lightning Básica",
		'it-it': "Energia base Lightning",
		'pt-br': "Energia Lightning Básica",
		'de-de': "Basis-Lightning-Energie"
	},

	rarity: "Hyper rare",
	category: "Energy",
	energyType: "Normal",
	types: ["Lightning"],

	variants: [
		{
			type: "holo"
		}
	],

	thirdParty: {
        cardmarket: 702553,
        tcgplayer: 490295
    }
}

export default card
