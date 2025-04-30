import { Card } from "../../../interfaces"
import Set from "../Journey Together"

const card: Card = {
	set: Set,

	name: {
		en: "Alolan Golem",
		fr: "Grolem d'Alola",
		es: "Golem de Alola",
		de: "Alola-Geowaz",
		it: "Golem di Alola",
		pt: "Golem de Alola",
		'es-mx': "Golem de Alola"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 180,
	types: ["Lightning"],
	stage: "Stage2",

	attacks: [{
		cost: ["Lightning"],

		name: {
			en: "Electromagnetic Catapult",
			fr: "Catapulte Électromagnétique",
			es: "Catapulta Electromagnética",
			de: "Elektromagnetisches Katapult",
			it: "Catapulta Elettromagnetica",
			pt: "Catapulta Eletromagnética",
			'es-mx': "Catapulta Electromagnética"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 70 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 70 puntos de daño por cada cara.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda até sair coroa. Este ataque causa 70 pontos de dano para cada cara.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 70 puntos de daño por cada cara."
		},

		damage: "70×"
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			en: "Megaton Fall",
			fr: "Chute Mégatonne",
			es: "Caída Megatón",
			de: "Megatonnenfall",
			it: "Caduta Megatonica",
			pt: "Queda do Megaton",
			'es-mx': "Caída Megatón"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			de: "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso.",
			pt: "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			'es-mx': "Este Pokémon también se hace 40 puntos de daño a sí mismo."
		},

		damage: 160
	}],

	retreat: 4,
	regulationMark: "H",

	variants: {
		"firstEdition": false,
		"holo": false,
		"normal": true
		"reverse": true,
		"wPromo": false,
		}
}

export default card
