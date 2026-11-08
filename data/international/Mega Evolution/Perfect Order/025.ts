import { Card } from "models/database/card"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	dexId: [721],

	name: {
		'en-us': "Volcanion",
		'fr-fr': "Volcanion",
		'es-es': "Volcanion",
		'es-mx': "Volcanion",
		'de-de': "Volcanion",
		'it-it': "Volcanion",
		'pt-br': "Volcanion"
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
			'en-us': "Strength",
			'fr-fr': "Force",
			'es-es': "Fuerza",
			'es-mx': "Fuerza",
			'de-de': "Stärke",
			'it-it': "Forza",
			'pt-br': "Força"
		},

		damage: 50
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			'en-us': "Powerful Steam",
			'fr-fr': "Vapeur Puissante",
			'es-es': "Vapor Poderoso",
			'es-mx': "Vapor Poderoso",
			'de-de': "Mächtiger Dampf",
			'it-it': "Forzavapore",
			'pt-br': "Vaporderoso"
		},

		effect: {
			'en-us': "Flip a coin for each {W} Energy attached to this Pokémon. This attack does 90 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie {W} attachée à ce Pokémon. Cette attaque inflige 90 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía {W} unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			'es-mx': "Lanza 1 moneda por cada Energía {W} unida a este Pokémon. Este ataque hace 90 puntos de daño por cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte {W}-Energie. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu.",
			'it-it': "Lancia una moneta per ogni Energia {W} assegnata a questo Pokémon. Questo attacco infligge 90 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia {W} ligada a este Pokémon. Este ataque causa 90 pontos de dano para cada cara."
		},

		damage: "90×"
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "J",

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 684408,
				cardmarket: 877438
			}
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 684408,
				cardmarket: 877438
			}
		}
	],

}

export default card
