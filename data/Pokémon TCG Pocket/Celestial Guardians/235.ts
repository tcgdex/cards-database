import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

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

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 180,
	types: ["Fighting"],

	evolveFrom: {
		en: "Machoke"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Mega Punch",
			fr: "Ultimapoing",
			es: "Megapuño",
			it: "Megapugno",
			de: "Megahieb",
			'pt-br': "Megassoco",
			ko: "메가톤펀치"
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