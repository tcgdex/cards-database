import { Card } from "models/database/card"
import Set from "../Genetic Apex"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Pikachu ex",
		'fr-fr': "Pikachu-ex",
		'es-es': "Pikachu ex",
		'it-it': "Pikachu-ex",
		'de-de': "Pikachu-ex",
		'pt-br': "Pikachu ex",
		'ko-kr': "피카츄 ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",

	dexId: [25],
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			'en-us': "Circle Circuit",
			'fr-fr': "Cercle Électrik",
			'es-es': "Circuito Circular",
			'it-it': "Elettroruota",
			'de-de': "Rundparcours",
			'pt-br': "Circuito Circular",
			'ko-kr': "일렉트릭서클"
		},

		effect: {
			'en-us': "This attack does 30 damage for each of your Benched {L} Pokémon.",
			'fr-fr': "Cette attaque inflige 30 dégâts pour chaque Pokémon {L} sur votre Banc.",
			'es-es': "Este ataque hace 30 puntos de daño por cada uno de tus Pokémon {L} en Banca.",
			'it-it': "Questo attacco infligge 30 danni per ogni Pokémon {L} nella tua panchina.",
			'de-de': "Diese Attacke fügt für jedes {L}-Pokémon auf deiner Bank 30 Schadenspunkte zu.",
			'pt-br': "Este Pokémon causa 30 pontos de dano para cada Pokémon {L} no seu Banco.",
			'ko-kr': "자신의 벤치의 {L}포켓몬의 수 × 30데미지를 준다."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	rarity: "Four Diamond",
	boosters: ["pikachu"]
}

export default card
