import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [810],
	set: Set,

	name: {
		fr: "Ouistempo",
		en: "Grookey",
		es: "Grookey",
		it: "Grookey",
		pt: "Grookey",
		de: "Chimpep"
	},

	illustrator: "Naoki Saito",
	rarity: "Common",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	attacks: [{
		name: {
			fr: "Combo-Griffe",
			en: "Fury Swipes",
			es: "Golpes Furia",
			it: "Sfuriate",
			pt: "Golpes de Fúria",
			de: "Kratzfurie"
		},

		effect: {
			fr: "Lancez 3 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			en: "Flip 3 coins. This attack does 10 damage for each heads.",
			es: "Lanza 3 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 10 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×",
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Basic",

	description: {
		en: "When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area."
	},

	thirdParty: {
		cardmarket: 539078
	}
}

export default card