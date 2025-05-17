import { Card } from "../../../interfaces"
import Set from "../Celestial Guardians"

const card: Card = {
	set: Set,

	name: {
		en: "Wishiwashi ex",
		fr: "Froussardine-ex",
		es: "Wishiwashi ex",
		it: "Wishiwashi-ex",
		de: "Lusardin-ex",
		'pt-br': "Wishiwashi ex",
		ko: "약어리 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			en: "School Storm",
			fr: "Banc Houleux",
			es: "Banco Tormentoso",
			it: "Banco Dirompente",
			de: "Schwarmsturm",
			'pt-br': "Cardume Tempestuoso",
			ko: "어군스톰"
		},

		damage: "30+",
		cost: ["Water", "Water", "Water"],

		effect: {
			en: "This attack does 40 more damage for each of your Benched Wishiwashi and Wishiwashi ex.",
			fr: "Cette attaque inflige 40 dégâts supplémentaires pour chaque Froussardine et Froussardine-ex sur votre Banc.",
			es: "Este ataque hace 40 puntos de daño más por cada uno de tus Wishiwashi y Wishiwashi ex en Banca.",
			it: "Questo attacco infligge 40 danni in più per ogni Wishiwashi e Wishiwashi-ex nella tua panchina.",
			de: "Diese Attacke fügt für jedes Lusardin und Lusardin-ex auf deiner Bank 40 Schadenspunkte mehr zu.",
			'pt-br': "Este ataque causa 40 pontos de dano a mais para cada um dos seus Wishiwashi e Wishiwashi ex no Banco.",
			ko: "자신의 벤치의 「약어리」 「약어리 ex」의 수 × 40데미지를 추가한다."
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
