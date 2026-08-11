import { Card } from "models/database/card"
import Set from "../Genetic Apex"

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

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [68],
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	evolveFrom: {
		'en-us': "Machoke"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			'en-us': "Mega Punch",
			'fr-fr': "Ultimapoing",
			'es-es': "Megapuño",
			'it-it': "Megapugno",
			'de-de': "Megahieb",
			'pt-br': "Megassoco",
			'ko-kr': "메가톤펀치"
		},

		damage: "120"
	}],

	weaknesses: [{
		type: "Psychic",
		value: "+20"
	}],

	retreat: 3,
	rarity: "Four Diamond",
	boosters: ["charizard"]
}

export default card
