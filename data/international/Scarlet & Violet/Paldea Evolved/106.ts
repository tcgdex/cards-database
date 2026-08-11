import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [56],
	set: Set,

	name: {
		'fr-fr': "Férosinge",
		'en-us': "Mankey",
		'es-es': "Mankey",
		'it-it': "Mankey",
		'pt-br': "Mankey",
		'de-de': "Menki"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'fr-fr': "Balayage",
			'en-us': "Low Kick",
			'es-es': "Patada Baja",
			'it-it': "Colpo Basso",
			'pt-br': "Rasteira",
			'de-de': "Fußkick"
		},

		damage: 10
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			'fr-fr': "Suspension",
			'en-us': "Hang Down",
			'es-es': "Prender",
			'it-it': "Tirar Giù",
			'pt-br': "Dependurar",
			'de-de': "Herunterhängen"
		},

		damage: 30
	}],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715581,
				tcgplayer: 497521,
				cardtrader: 248295
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715581,
				tcgplayer: 497521,
				cardtrader: 248295
			}
		},
	],

	illustrator: "kurumitsu",

	description: {
		'en-us': "It lives in groups in the treetops. If it loses sight of its group, it becomes infuriated by its loneliness.",
	},
}

export default card
