import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	dexId: [205],
	set: Set,

	name: {
		en: "Forretress",
		fr: "Foretress",
		es: "Forretress",
		it: "Forretress",
		pt: "Forretress",
		de: "Forstellka"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			en: "Spike Cannon",
			fr: "Picanon",
			es: "Clavo Cañón",
			it: "Sparalance",
			pt: "Canhão de Espinhos",
			de: "Dornkanone"
		},

		effect: {
			en: "Flip 3 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Steel Tackle",
			fr: "Charge d'Acier",
			es: "Placaje de Acero",
			it: "Ferrazione",
			pt: "Colisão de Aço",
			de: "Stahltackle"
		},

		effect: {
			en: "This Pokémon also does 40 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 40 dégâts.",
			es: "Este Pokémon también se hace 40 puntos de daño a sí mismo.",
			it: "Questo Pokémon infligge anche 40 danni a se stesso.",
			pt: "Este Pokémon também causa 40 pontos de dano a si mesmo.",
			de: "Dieses Pokémon fügt auch sich selbst 40 Schadenspunkte zu."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		holo: false
	}
}

export default card