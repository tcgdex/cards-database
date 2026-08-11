import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [935],
	set: Set,

	name: {
		'fr-fr': "Charbambin",
		'en-us': "Charcadet",
		'es-es': "Charcadet",
		'it-it': "Charcadet",
		'pt-br': "Charcadet",
		'de-de': "Knarbon"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Koud'Pied",
			'en-us': "Kick",
			'es-es': "Patada",
			'it-it': "Calcio",
			'pt-br': "Chute",
			'de-de': "Tritt"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715512,
				tcgplayer: 497449,
				cardtrader: 248627
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715512,
				tcgplayer: 497449,
				cardtrader: 248627
			}
		},
	],

	illustrator: "takuyoa",

	description: {
		'en-us': "Burnt charcoal came to life and became a Pokémon. Possessing a fiery fighting spirit, Charcadet will battle even tough opponents.",
	},
}

export default card
