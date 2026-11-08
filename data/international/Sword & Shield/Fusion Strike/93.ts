import { Card } from "models/database/card"
import Set from "../Fusion Strike"

const card: Card = {
	dexId: [405],
	set: Set,

	name: {
		'en-us': "Luxray",
		'fr-fr': "Luxray",
		'es-es': "Luxray",
		'it-it': "Luxray",
		'pt-br': "Luxray",
		'de-de': "Luxtra"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		'en-us': "Luxio",
		'fr-fr': "Luxio",
		'es-es': "Luxio",
		'it-it': "Luxio",
		'pt-br': "Luxio",
		'de-de': "Luxio"
	},

	stage: "Stage2",
	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 0,
	regulationMark: "E",
	illustrator: "Atsushi Furusawa",

	description: {
		'en-us': "Luxray's ability to see through objects comes in handy when it's scouting for danger."
	},

	attacks: [{
		cost: ["Lightning", "Colorless"],

		name: {
			'en-us': "Thunder Claws",
			'fr-fr': "Griffes Tonnerre",
			'de-de': "Donnerkrallen",
			'es-es': "Garras Trueno",
			'pt-br': "Garras Trovejantes",
			'it-it': "Artigli Tonanti"
		},

		damage: 90
	}],


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 582485,
				tcgplayer: 253249
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 582485,
				tcgplayer: 253249
			}
		},
	],
}

export default card
