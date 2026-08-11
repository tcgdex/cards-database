import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [744],
	set: Set,

	name: {
		'fr-fr': "Rocabot",
		'en-us': "Rockruff",
		'es-es': "Rockruff",
		'it-it': "Rockruff",
		'pt-br': "Rockruff",
		'de-de': "Wuffels"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Morsure",
			'en-us': "Bite",
			'es-es': "Mordisco",
			'it-it': "Morso",
			'pt-br': "Mordida",
			'de-de': "Biss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "This Pokémon is very friendly when it's young. Its disposition becomes vicious once it matures, but it never forgets the kindness of its master.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725196,
				tcgplayer: 509856,
				cardtrader: 255801
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725196,
				tcgplayer: 509856,
				cardtrader: 255801
			}
		},
	],

	illustrator: "Jerky",

	
}

export default card
