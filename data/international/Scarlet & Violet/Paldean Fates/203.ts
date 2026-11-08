import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [278],
	set: Set,

	name: {
		'en-us': "Wingull",
		'fr-fr': "Goélise",
		'es-es': "Wingull",
		'it-it': "Wingull",
		'pt-br': "Wingull",
		'de-de': "Wingull"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Gust",
			'fr-fr': "Tornade",
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
			type: 'holo',
			thirdParty: {
				cardmarket: 751742,
				tcgplayer: 535196,
				cardtrader: 274388
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "It soars high in the sky, riding on updrafts like a glider. It carries food tucked in its bill.",
	},

}

export default card
