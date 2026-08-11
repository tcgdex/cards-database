import { Card } from "models/database/card"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Lapras ex",
		'fr-fr': "Lokhlass-ex",
		'es-es': "Lapras ex",
		'it-it': "Lapras-ex",
		'de-de': "Lapras-ex",
		'pt-br': "Lapras ex",
		'ko-kr': "라프라스 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "None",
	category: "Pokemon",

	dexId: [131],
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			'en-us': "Bubble Drain",
			'fr-fr': "Vide Bulle",
			'es-es': "Drenaje Burbujas",
			'it-it': "Assorbibolla",
			'de-de': "Blasengully",
			'pt-br': "Dreno de Bolha",
			'ko-kr': "버블드레인"
		},

		cost: ["Water", "Water", "Colorless"],
		damage: 80,

		effect: {
			'en-us': "Heal 20 damage from this Pokémon.",
			'fr-fr': "Soignez 20 dégâts de ce Pokémon.",
			'es-es': "Cura 20 puntos de daño a este Pokémon.",
			'it-it': "Cura questo Pokémon da 20 danni.",
			'de-de': "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			'ko-kr': "이 포켓몬의 HP를 20회복."
		}
	}],

	hp: 140,
	suffix: "EX",

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 3,
	boosters: ["vol1"]
}

export default card