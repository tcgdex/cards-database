import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [278],
	set: Set,

	name: {
		'fr-fr': "Goélise",
		'en-us': "Wingull",
		'es-es': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'de-de': "Wingull"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Tornade",
			'en-us': "Gust",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-30",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715633,
				tcgplayer: 497576,
				cardtrader: 248804
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715633,
				tcgplayer: 497576,
				cardtrader: 248804
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "It soars high in the sky, riding on updrafts like a glider. It carries food tucked in its bill.",
	},
}

export default card
