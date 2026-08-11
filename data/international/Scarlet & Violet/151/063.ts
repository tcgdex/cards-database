import { Card } from "models/database/card"
import Set from "../151"

const card: Card = {
	dexId: [63],
	set: Set,

	name: {
		'fr-fr': "Abra",
		'en-us': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'pt-br': "Abra",
		'de-de': "Abra"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'fr-fr': "Piqûre Psy",
			'en-us': "Psyshot",
			'es-es': "Disparo Psi",
			'it-it': "Psicosparo",
			'pt-br': "Tiro Psíquico",
			'de-de': "Psychoschuss"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Darkness",
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
		'en-us': "Abra can teleport in its sleep. Apparently the more deeply Abra sleeps, the farther its teleportations go.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 733658,
				tcgplayer: 516268,
				cardtrader: 261058
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 733658,
				tcgplayer: 516268,
				cardtrader: 261058
			}
		},
	],

	illustrator: "Mitsuhiro Arita",

	
}

export default card
