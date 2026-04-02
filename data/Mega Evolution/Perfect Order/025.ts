import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Volcanion",
		fr: "Volcanion",
		es: "Volcanion",
		'es-mx': "Volcanion",
		de: "Volcanion",
		it: "Volcanion",
		pt: "Volcanion"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Strength",
			fr: "Force",
			es: "Fuerza",
			'es-mx': "Fuerza",
			de: "Stärke",
			it: "Forza",
			pt: "Força"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			en: "Powerful Steam",
			fr: "Vapeur Puissante",
			es: "Vapor Poderoso",
			'es-mx': "Vapor Poderoso",
			de: "Mächtiger Dampf",
			it: "Forzavapore",
			pt: "Vaporderoso"
		},

		effect: {
			en: "Flip a coin for each {W} Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie {W} attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 1 moneda por cada Energía {W} unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Energía {W} unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			de: "Wirf 1 Münze für jede an dieses Pokémon angelegte {W}-Energie. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			it: "Lancia una moneta per ogni Energia {W} assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue uma moeda para cada Energia {W} ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara."
		},

		damage: "90×"
	}],

	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	],

	thirdParty: {
		tcgplayer: 684408,
		cardmarket: 877438
	}
}

export default card
