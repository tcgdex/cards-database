import { Card } from "models/database/card"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Wishiwashi ex",
		'fr-fr': "Froussardine-ex",
		'es-es': "Wishiwashi ex",
		'it-it': "Wishiwashi-ex",
		'de-de': "Lusardin-ex",
		'pt-br': "Wishiwashi ex",
		'ko-kr': "약어리 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",

	dexId: [746],
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'en-us': "School Storm",
			'fr-fr': "Banc Houleux",
			'es-es': "Banco Tormentoso",
			'it-it': "Banco Dirompente",
			'de-de': "Schwarmsturm",
			'pt-br': "Cardume Tempestuoso",
			'ko-kr': "어군스톰"
		},

		damage: "30+",
		cost: ["Water", "Water", "Water"],

		effect: {
			'en-us': "This attack does 40 more damage for each of your Benched Wishiwashi and Wishiwashi ex.",
			'fr-fr': "Cette attaque inflige 40 dégâts supplémentaires pour chaque Froussardine et Froussardine-ex sur votre Banc.",
			'es-es': "Este ataque hace 40 puntos de daño más por cada uno de tus Wishiwashi y Wishiwashi ex en Banca.",
			'it-it': "Questo attacco infligge 40 danni in più per ogni Wishiwashi e Wishiwashi-ex nella tua panchina.",
			'de-de': "Diese Attacke fügt für jedes Lusardin und Lusardin-ex auf deiner Bank 40 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada um dos seus Wishiwashi e Wishiwashi ex no Banco.",
			'ko-kr': "자신의 벤치의 「약어리」 「약어리 ex」의 수 × 40데미지를 추가한다."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["lunala"]
}

export default card
