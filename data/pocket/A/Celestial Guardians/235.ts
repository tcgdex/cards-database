import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Machamp ex",
		'fr-fr': "Mackogneur-ex",
		'es-es': "Machamp ex",
		'it-it': "Machamp-ex",
		'de-de': "Machomei-ex",
		'pt-br': "Machamp ex",
		'ko-kr': "괴력몬 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [68],
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		'en-us': "Machoke"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'de-de': "Megahieb",
			'pt-br': "Megassoco",
			'ko-kr': "메가톤펀치"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["solgaleo"]
}

export default card