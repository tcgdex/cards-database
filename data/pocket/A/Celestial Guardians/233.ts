import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Starmie ex",
		'fr-fr': "Staross-ex",
		'es-es': "Starmie ex",
		'it-it': "Starmie-ex",
		'de-de': "Starmie-ex",
		'pt-br': "Starmie ex",
		'ko-kr': "아쿠스타 ex"
	},

	illustrator: "PLANETA Igarashi",
	rarity: "Two Shiny",
	category: "Pokemon",

	dexId: [121],
	hp: 130,
	types: ["Water"],

	evolveFrom: {
		'en-us': "Staryu"
	},

	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'it-it': "Idrosplash",
			'de-de': "Hydroplatscher",
			'pt-br': "Hidroborrifada",
			'ko-kr': "하이드로 스플래시"
		},

		damage: 90,
		cost: ["Water", "Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	boosters: ["solgaleo"]
}

export default card