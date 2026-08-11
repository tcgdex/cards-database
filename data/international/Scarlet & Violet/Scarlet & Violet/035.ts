import { Card } from "models/database/card"
import Set from "../Scarlet & Violet"

const card: Card = {
	dexId: [324],
	set: Set,

	name: {
		'en-us': "Torkoal",
		'fr-fr': "Chartor",
		'es-es': "Torkoal",
		'it-it': "Torkoal",
		'pt-br': "Torkoal",
		'de-de': "Qurtel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Stampede",
			'fr-fr': "Ruée",
			'es-es': "Estampida",
			'it-it': "Fuggi Fuggi",
			'pt-br': "Estouro",
			'de-de': "Zertrampeln"
		},

		damage: 30
	}, {
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			'en-us': "Concentrated Fire",
			'fr-fr': "Feu Concentré",
			'es-es': "Fuego Concentrado",
			'it-it': "Fuoco Concentrato",
			'pt-br': "Fogo Concentrado",
			'de-de': "Geballtes Feuer"
		},

		effect: {
			'en-us': "Flip a coin for each {R} Energy attached to this Pokémon. This attack does 80 damage for each heads.",
			'fr-fr': "Lancez une pièce pour chaque Énergie {R} attachée à ce Pokémon. Cette attaque inflige 80 dégâts pour chaque côté face.",
			'es-es': "Lanza 1 moneda por cada Energía {R} unida a este Pokémon. Este ataque hace 80 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta per ogni Energia {R} assegnata a questo Pokémon. Questo attacco infligge 80 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda para cada Energia {R} ligada a este Pokémon. Este ataque causa 80 pontos de dano para cada cara.",
			'de-de': "Wirf 1 Münze für jede an dieses Pokémon angelegte {R}-Energie. Diese Attacke fügt 80 Schadenspunkte pro Kopf zu."
		},

		damage: "80×"
	}],

	weaknesses: [
		{
			type: "Water",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "G",

	variants: [
		{
			type: "reverse"
		},
		{
			type: "normal"
		}
	],

	illustrator: "Kurata So",

	description: {
		'en-us': "It burns coal inside its shell for energy. It blows out black soot if it is endangered.",
	},

	thirdParty: {
        cardmarket: 702331,
        tcgplayer: 487875
    }
}

export default card