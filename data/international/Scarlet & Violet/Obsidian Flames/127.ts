import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [194],
	set: Set,

	name: {
		'fr-fr': "Axoloto de Paldea",
		'en-us': "Paldean Wooper",
		'es-es': "Wooper de Paldea",
		'it-it': "Wooper di Paldea",
		'pt-br': "Wooper de Paldea",
		'de-de': "Paldea-Felino"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],
	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			'fr-fr': "Flop",
			'en-us': "Flop",
			'es-es': "Vuelta",
			'it-it': "Tonfo",
			'pt-br': "Baque",
			'de-de': "Plumps"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "After losing a territorial struggle, Wooper began living on land. The Pokémon changed over time, developing a poisonous film to protect its body.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725207,
				tcgplayer: 509883,
				cardtrader: 255812
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725207,
				tcgplayer: 509883,
				cardtrader: 255812
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
