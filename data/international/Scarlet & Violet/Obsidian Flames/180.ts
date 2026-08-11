import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [915],
	set: Set,

	name: {
		'fr-fr': "Gourmelet",
		'en-us': "Lechonk",
		'es-es': "Lechonk",
		'it-it': "Lechonk",
		'pt-br': "Lechonk",
		'de-de': "Ferkuli"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Charge",
			'en-us': "Tackle",
			'es-es': "Placaje",
			'it-it': "Azione",
			'pt-br': "Investida",
			'de-de': "Tackle"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	description: {
		'en-us': "It searches for food all day. It possesses a keen sense of smell but doesn't use it for anything other than foraging.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725260,
				tcgplayer: 509760,
				cardtrader: 256076
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725260,
				tcgplayer: 509760,
				cardtrader: 256076
			}
		},
	],

	illustrator: "HYOGONOSUKE",

	
}

export default card
