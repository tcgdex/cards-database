import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [924],
	set: Set,

	name: {
		'fr-fr': "Compagnol",
		'en-us': "Tandemaus",
		'es-es': "Tandemaus",
		'it-it': "Tandemaus",
		'pt-br': "Tandemaus",
		'de-de': "Zwieps"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Accrochage",
			'en-us': "Attach",
			'es-es': "Pegarse",
			'it-it': "Appiccicoso",
			'pt-br': "Conectar",
			'de-de': "Festkleben"
		},

		damage: 10
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Coud'Pattes",
			'en-us': "Smash Kick",
			'es-es': "Patada Destrucción",
			'it-it': "Calcio Esplosivo",
			'pt-br': "Chute Poderoso",
			'de-de': "Schmetterkick"
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

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715642,
				tcgplayer: 497587,
				cardtrader: 248823
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715642,
				tcgplayer: 497587,
				cardtrader: 248823
			}
		},
	],

	illustrator: "Sekio",

	description: {
		'en-us': "Exhibiting great teamwork, they use their incisors to cut pieces out of any material that might be useful for a nest, then make off with them.",
	},
}

export default card
