import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [808],
	set: Set,

	name: {
		'fr-fr': "Meltan",
		'en-us': "Meltan",
		'es-es': "Meltan",
		'it-it': "Meltan",
		'pt-br': "Meltan",
		'de-de': "Meltan"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		cost: ["Metal"],

		name: {
			'fr-fr': "Dissolution",
			'en-us': "Melt",
			'es-es': "Derretir",
			'it-it': "Liquefazione",
			'pt-br': "Derreter",
			'de-de': "Schmelzen"
		},

		damage: 20
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
	regulationMark: "G",

	description: {
		'en-us': "They live as a group, but when the time comes, one strong Meltan will absorb all the others and evolve.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725232,
				tcgplayer: 509939,
				cardtrader: 255837
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725232,
				tcgplayer: 509939,
				cardtrader: 255837
			}
		},
	],

	illustrator: "Nobuhiro Imagawa",

	
}

export default card
