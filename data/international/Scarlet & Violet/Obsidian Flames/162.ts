import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [16],
	set: Set,

	name: {
		'fr-fr': "Roucool",
		'en-us': "Pidgey",
		'es-es': "Pidgey",
		'it-it': "Pidgey",
		'pt-br': "Pidgey",
		'de-de': "Taubsi"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'fr-fr': "Tornade",
			'en-us': "Gust",
			'es-es': "Tornado",
			'it-it': "Raffica",
			'pt-br': "Lufada de Vento",
			'de-de': "Windstoß"
		},

		damage: 20
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

	description: {
		'en-us': "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725242,
				tcgplayer: 509666,
				cardtrader: 255847
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725242,
				tcgplayer: 509666,
				cardtrader: 255847
			}
		},
	],

	illustrator: "Naoyo Kimura",

	
}

export default card
