import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Grookey",
		fr: "Ouistempo",
		es: "Grookey",
		it: "Grookey",
		pt: "Grookey",
		de: "Chimpep"
	},

	illustrator: "kodama",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Hit Twice",
			fr: "Double Frappe",
			es: "Doble Redoble",
			it: "Doppia Botta",
			pt: "Batida Dupla",
			de: "Zweimal zuschlagen"
		},

		effect: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 30 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 30 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 30 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×",
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It attacks with rapid beats of its stick. As it strikes with amazing speed, it gets more and more pumped."
	}
}

export default card