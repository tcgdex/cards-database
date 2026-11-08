import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Rhyhorn",
		'fr-fr': "Rhinocorne",
		'es-es': "Rhyhorn",
		'it-it': "Rhyhorn",
		'de-de': "Rihorn",
		'pt-br': "Rhyhorn",
		'ko-kr': "뿔카노"
	},

	illustrator: "Midori Harada",
	category: "Pokemon",

	dexId: [111],
	hp: 80,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'en-us': "Tackle",
			'fr-fr': "Charge",
			'es-es': "Placaje",
			'it-it': "Azione",
			'de-de': "Tackle",
			'pt-br': "Investida",
			'ko-kr': "몸통박치기"
		},

		damage: "60"
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 3,
	rarity: "One Diamond",

	description: {
		'en-us': "Strong, but not too bright, this Pokémon can shatter even a skyscraper with its charging tackles.",
		'fr-fr': "Costaud, mais pas très intelligent, ce Pokémon est capable\nde détruire un immeuble entier en fonçant dessus.",
		'es-es': "Su inteligencia es limitada, aunque posee una\nfuerza tan considerable que le permite incluso\nderribar rascacielos con solo embestirlos.",
		'it-it': "È molto forte, benché non particolarmente brillante.\nSe si scaglia contro un grattacielo può raderlo al suolo.",
		'de-de': "Dieses Pokémon ist zwar nicht besonders klug,\naber dafür so stark, dass es durch Rammen sogar\nHochhäuser zum Einsturz bringen kann.",
		'pt-br': "Forte, mas não muito brilhante, este Pokémon\npode estilhaçar até mesmo um arranha-céu\ncom suas investidas poderosas.",
		'ko-kr': "머리는 나쁘지만 힘이 세서\n고층 빌딩도 몸통박치기로\n산산조각 낸다."
	},

	boosters: ["mewtwo"]
}

export default card
