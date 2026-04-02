import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Chimchar",
		fr: "Ouisticram",
		de: "Panflam",
		it: "Chimchar",
		es: "Chimchar",
		pt: "Chimchar",
		'es-mx': "Chimchar"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],
	stage: "Basic",
	dexId: [390],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
			de: "Kratzfurie",
			it: "Sfuriate",
			es: "Golpes Furia",
			pt: "Golpes de Fúria",
			'es-mx': "Garras Furiosas"
		},

		damage: "20×",

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			pt: "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara."
		}
	}],

	retreat: 1,
	regulationMark: "J",

	thirdParty: {
		cardmarket: 875190
	},

	variants: [
		{
			type: "holo"
		}
	]
}

export default card
