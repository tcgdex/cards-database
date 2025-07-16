import { Card } from "../../../interfaces"
import Set from "../Destined Rivals"

const card: Card = {
	set: Set,

	name: {
		en: "Ponyta",
		fr: "Ponyta",
		de: "Ponita",
		it: "Ponyta",
		es: "Ponyta",
		pt: "Ponyta",
		'es-mx': "Ponyta"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Double Headbutt",
			fr: "Double Coup d'Boule",
			de: "Doppelte Kopfnuss",
			it: "Doppia Bottintesta",
			es: "Doble Cabezazo",
			pt: "Cabeçada Dupla",
			'es-mx': "Doble Cabezazo"
		},

		effect: {
			en: "Flip 2 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu.",
			it: "Lancia due volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			es: "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			pt: "Jogue 2 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			'es-mx': "Lanza 2 monedas. Este ataque hace 10 puntos de daño por cada cara."
		},

		damage: "10×"
	}],

	retreat: 1,
	regulationMark: "I",

	variants: [
		{
			type: 'normal'
		},
		{
			type: 'reverse'
		},
	]
}

export default card
