import { Card } from "models/database/card"
import Set from "../Temporal Forces"

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
	hp: 80,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal", "Metal"],

		name: {
			'en-us': "Headbutt",
			'fr-fr': "Coup d'Boule",
			'es-es': "Golpe Cabeza",
			'it-it': "Bottintesta",
			'pt-br': "Cabeçada",
			'de-de': "Kopfnuss"
		},

		damage: 50
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
	retreat: 3,
	regulationMark: "H",

	description: {
		'en-us': "It dissolves and eats metal. Circulating liquid metal within its body is how it generates energy.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 760746,
				tcgplayer: 542860
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 760746,
				tcgplayer: 542860
			}
		},
	],

	illustrator: "Taiga Kayama",

}

export default card