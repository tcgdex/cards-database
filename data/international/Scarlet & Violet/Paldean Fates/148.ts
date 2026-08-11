import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [63],
	set: Set,

	name: {
		'en-us': "Abra",
		'fr-fr': "Abra",
		'es-es': "Abra",
		'it-it': "Abra",
		'pt-br': "Abra",
		'de-de': "Abra"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			'en-us': "Psyshot",
			'fr-fr': "Piqûre Psy",
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

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 751687,
				tcgplayer: 534631,
				cardtrader: 274331
			}
		},
	],

	illustrator: "Kouki Saitou",

	description: {
		'en-us': "Abra can teleport in its sleep. Apparently the more deeply Abra sleeps, the farther its teleportations go.",
	},

}

export default card
