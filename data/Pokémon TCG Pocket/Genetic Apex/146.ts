import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Machamp ex",
		fr: "Mackogneur-ex",
		es: "Machamp ex",
		it: "Machamp-ex",
		de: "Machomei-ex",
		'pt-br': "Machamp ex",
		ko: "괴력몬 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [68],
	hp: 180,
	types: ["Fighting"],
	stage: "Stage2",

	evolveFrom: {
		en: "Machoke"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			de: "Megahieb",
			'pt-br': "Megassoco",
			ko: "메가톤펀치"
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
