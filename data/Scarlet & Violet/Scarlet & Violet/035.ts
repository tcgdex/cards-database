import { Card } from "../../../interfaces"
import Set from "../Scarlet & Violet"

const card: Card = {
	set: Set,

	name: {
		en: "Torkoal",
		fr: "Chartor",
		es: "Torkoal",
		it: "Torkoal",
		pt: "Torkoal",
		de: "Qurtel"
	},

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
			es: "Estampida",
			it: "Fuggi Fuggi",
			pt: "Estouro",
			de: "Zertrampeln"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Concentrated Fire",
			fr: "Feu Concentré",
			es: "Fuego Concentrado",
			it: "Fuoco Concentrato",
			pt: "Fogo Concentrado",
			de: "Geballtes Feuer"
		},

		effect: {
			en: "Flip a coin for each Fire Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Fire attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía Fire unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			it: "Lancia una moneta per ogni Energia Fire assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia Fire ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte Fire-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card