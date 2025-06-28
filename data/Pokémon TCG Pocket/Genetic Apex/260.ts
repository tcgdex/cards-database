import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos ex",
		fr: "Électhor-ex",
		es: "Zapdos ex",
		it: "Zapdos-ex",
		de: "Zapdos-ex",
		'pt-br': "Zapdos ex",
		ko: "썬더 ex"
	},

	illustrator: "PLANETA Saito",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné",
			es: "Trueno Rabioso",
			it: "Rombotuono",
			de: "Tosender Donner",
			'pt-br': "Trovão Devastador",
			ko: "낙뢰"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige aussi 30 dégâts à un de vos Pokémon de Banc.",
			es: "Este ataque también hace 30 puntos de daño a 1 de tus Pokémon en Banca.",
			it: "Questo attacco infligge anche 30 danni a uno dei tuoi Pokémon in panchina.",
			de: "Diese Attacke fügt auch 1 Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este ataque também causa 30 pontos de dano a 1 dos seus Pokémon no Banco.",
			ko: "자신의 벤치 포켓몬 1마리에게도 30데미지를 준다."
		},

		damage: "100"
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Two Star",
	boosters: ["pikachu"]
}

export default card
