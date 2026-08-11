import { Card } from "models/database/card"
import Set from "../Destined Rivals"

const card: Card = {
	dexId: [974],
	set: Set,

	name: {
		'en-us': "Cetoddle",
		'fr-fr': "Piétacé",
		'de-de': "Flaniwal",
		'it-it': "Cetoddle",
		'es-es': "Cetoddle",
		'pt-br': "Cetoddle",
		'es-mx': "Cetoddle"
	},


	illustrator: "sui",

	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			'en-us': "Gentle Slap",
			'fr-fr': "Gifle Douce",
			'de-de': "Sanfter Hieb",
			'it-it': "Schiaffetto",
			'es-es': "Bofetada Gentil",
			'pt-br': "Tapinha",
			'es-mx': "Cachetadita"
		},

		damage: 30
	}, {
		cost: ["Water", "Water", "Water", "Colorless"],

		name: {
			'en-us': "Frost Smash",
			'fr-fr': "Impact Glacial",
			'de-de': "Frostschlag",
			'it-it': "Gelocolpo",
			'es-es': "Golpe Gélido",
			'pt-br': "Pancada Congelada",
			'es-mx': "Golpazo Gélido"
		},

		damage: 80
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "I",

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 825938,
				tcgplayer: 632877
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 825938,
				tcgplayer: 632877
			}
		},
	],
}

export default card
