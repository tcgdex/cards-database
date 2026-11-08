import { Card } from "models/database/card"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [860],
	set: Set,

	name: {
		'en-us': "Morgrem",
		'fr-fr': "Fourbelin",
		'es-es': "Morgrem",
		'it-it': "Morgrem",
		'pt-br': "Morgrem",
		'de-de': "Pelzebub"
	},

	illustrator: "Shiburingaru",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Darkness"],

	evolveFrom: {
		'en-us': "Impidimp",
		'fr-fr': "Grimalin",
		'es-es': "Impidimp",
		'it-it': "Impidimp",
		'pt-br': "Impidimp",
		'de-de': "Bähmon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			'en-us': "Smash Kick",
			'fr-fr': "Coud'Pattes",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
		},

		damage: 30
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			'en-us': "Pierce",
			'fr-fr': "Transpercement",
			'es-es': "Perforar",
			'it-it': "Perforare",
			'pt-br': "Perfurar",
			'de-de': "Durchbohren"
		},

		damage: 50
	}],

	weaknesses: [
		{
			type: "Grass",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "When it gets down on all fours as if to beg for forgiveness, it's trying to lure opponents in so that it can stab them with its spear-like hair.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 608639,
				tcgplayer: 263811
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 608639,
				tcgplayer: 263811
			}
		},
	],
}

export default card
