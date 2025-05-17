import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Starmie ex",
		fr: "Staross-ex",
		es: "Starmie ex",
		it: "Starmie-ex",
		de: "Starmie-ex",
		'pt-br': "Starmie ex",
		ko: "아쿠스타 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		en: "Staryu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Hydro Splash",
			fr: "Hydro-Éclaboussure",
			es: "Hidroestallido",
			it: "Idrosplash",
			de: "Hydroplatscher",
			'pt-br': "Hidroborrifada",
			ko: "하이드로 스플래시"
		},

		damage: 90,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0
}

export default card