import { Card } from "../../../interfaces"
import Set from "../Promos-A"

const card: Card = {
	set: Set,

	name: {
		en: "Lapras ex",
		fr: "Lokhlass-ex",
		es: "Lapras ex",
		it: "Lapras-ex",
		de: "Lapras-ex",
		'pt-br': "Lapras ex",
		ko: "라프라스 ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "None",
	category: "Pokemon",
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Bubble Drain",
			fr: "Vide Bulle",
			es: "Drenaje Burbujas",
			it: "Assorbibolla",
			de: "Blasengully",
			'pt-br': "Dreno de Bolha",
			ko: "버블드레인"
		},

		cost: ["Water", "Water", "Colorless"],
		damage: 80,

		effect: {
			en: "Heal 20 damage from this Pokémon.",
			fr: "Soignez 20 dégâts de ce Pokémon.",
			es: "Cura 20 puntos de daño a este Pokémon.",
			it: "Cura questo Pokémon da 20 danni.",
			de: "Heile 20 Schadenspunkte bei diesem Pokémon.",
			'pt-br': "Cure 20 pontos de dano deste Pokémon.",
			ko: "이 포켓몬의 HP를 20회복."
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