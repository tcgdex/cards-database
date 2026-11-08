import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [808],
	set: Set,

	name: {
		'en-us': "Meltan",
		'fr-fr': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 10
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			'en-us': "Beam",
			'fr-fr': "Rayon",
			'es-es': "Transmisión",
			'it-it': "Raggio",
			'pt-br': "Feixe",
			'de-de': "Strahl"
		},

		damage: 40
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Grass",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "H",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 785956,
				tcgplayer: 567328
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785956,
				tcgplayer: 567328
			}
		},
		{
			type: "normal",
			stamp: ["set-logo"],
			thirdParty: {
				cardmarket: 841265,
			}
		},
	],

	illustrator: "Yuka Morii",

}

export default card
