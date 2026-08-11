import { Card } from "models/database/card"
import Set from "../Genetic Apex"

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
	category: "Pokemon",

	dexId: [121],
	hp: 130,
	types: ["Water"],
	stage: "Stage1",

	evolveFrom: {
		'en-us': "Staryu"
	},

	suffix: "EX",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'en-us': "Hydro Splash",
			'fr-fr': "Hydro-Éclaboussure",
			'es-es': "Hidroestallido",
			'it-it': "Idrosplash",
			'de-de': "Hydroplatscher",
			'pt-br': "Hidroborrifada",
			'ko-kr': "하이드로 스플래시"
		},

		damage: "90"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 0,
	rarity: "Two Star",
	boosters: ["charizard"]
}

export default card
