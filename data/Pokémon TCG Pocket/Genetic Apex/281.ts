import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex",
		fr: "Pikachu-ex",
		es: "Pikachu ex",
		it: "Pikachu-ex",
		de: "Pikachu-ex",
		'pt-br': "Pikachu ex",
		ko: "피카츄 ex"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Circle Circuit",
			fr: "Cercle Électrik",
			es: "Circuito Circular",
			it: "Elettroruota",
			de: "Rundparcours",
			'pt-br': "Circuito Circular",
			ko: "일렉트릭서클"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched {L} Pokémon.",
			fr: "Cette attaque inflige 30 dégâts pour chaque Pokémon {L} sur votre Banc.",
			es: "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon {L} en Banca.",
			it: "Questo attacco infligge 30 danni per ogni Pokémon {L} nella tua panchina.",
			de: "Diese Attacke fügt für jedes {L}-Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este Pokémon causa 30 pontos de dano para cada Pokémon {L} no seu Banco.",
			ko: "자신의 벤치의 {L}포켓몬의 수 × 30데미지를 준다."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Three Star"
}

export default card
