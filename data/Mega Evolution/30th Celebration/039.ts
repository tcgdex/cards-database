import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	description: {
		en: "It has small electric sacs on both its cheeks. When in a tough spot, this Pokémon discharges electricity."
	},

	name: {
		en: "Pikachu",
		fr: "Pikachu",
		de: "Pikachu",
		es: "Pikachu",
		it: "Pikachu",
		'es-mx': "Pikachu"
	},

	illustrator: "Teeziro",
	rarity: "Pikachu Rare",
	category: "Pokemon",
	dexId: [25],
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Iron Tail",
			fr: "Queue de Fer",
			de: "Eisenschweif",
			es: "Cola Férrea",
			it: "Codacciaio",
			'es-mx': "Cola de Hierro"
		},

		effect: {
			en: "Flip a coin until you get tails. This attack does 20 damage for each heads.",
			fr: "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 20 dégâts pour chaque côté face.",
			de: "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			es: "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara.",
			it: "Lancia una moneta finché non esce croce. Questo attacco infligge 20 danni ogni volta che esce testa.",
			'es-mx': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 20 puntos de daño por cada cara."
		},

		damage: "20×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "J",
	variants: [
		{
			type: "holo",
			stamp: ["30th-anniversary"],
			thirdParty: {
				cardmarket: 907646,
				tcgplayer: 712943
			}
		}
	],
}

export default card
