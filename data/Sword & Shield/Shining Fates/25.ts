import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Volcanion",
		en: "Volcanion",
		es: "Volcanion",
		it: "Volcanion",
		pt: "Volcanion",
		de: "Volcanion"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Enfoncement",
			en: "Hammer In",
			es: "Martillear",
			it: "Martello",
			pt: "Martelada",
			de: "Einhämmern"
		},

		damage: 50,
		cost: ["Water", "Colorless"]
	}, {
		name: {
			fr: "Vapeur Explosive",
			en: "Dynamite Steam",
			es: "Vapor Dinamita",
			it: "Vapordinamite",
			pt: "Vapor de Dinamite",
			de: "Dynamitdampf"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 120 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 120 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 120 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 120 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 120 Schadenspunkte pro Kopf zu."
		},

		damage: "120×",
		cost: ["Water", "Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "It expels its internal steam from the arms on its back. It has enough power to blow away a mountain."
	}
}

export default card
