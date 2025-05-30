import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Torkoal",
		fr: "Chartor",
		de: "Qurtel",
		it: "Torkoal",
		es: "Torkoal",
		pt: "Torkoal"
	},

	illustrator: "Kurata So",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Stampede",
			fr: "Ruée",
			de: "Zertrampeln",
			it: "Fuggi Fuggi",
			es: "Estampida",
			pt: "Estouro"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Concentrated Fire",
			fr: "Feu Concentré",
			de: "Geballtes Feuer",
			it: "Fuoco Concentrato",
			es: "Fuego Concentrado",
			pt: "Fogo Concentrado"
		},

		effect: {
			en: "Flip a coin for each {R} Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie {R} attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {R}-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta per ogni Energia {R} assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			es: "Lanza 1 moneda por cada Energía {R} unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			pt: "Jogue uma moeda para cada Energia {R} ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara."
		},

		damage: "80×"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card