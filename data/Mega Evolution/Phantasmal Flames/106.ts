import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Meowth",
		fr: "Miaouss",
		es: "Meowth",
		'es-mx': "Meowth",
		de: "Mauzi",
		it: "Meowth",
		pt: "Meowth"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
			es: "Golpes Furia",
			'es-mx': "Garras Furiosas",
			de: "Kratzfurie",
			it: "Sfuriate",
			pt: "Golpes de Fúria"
		},

		effect: {
			en: "Flip 3 coins. This attack does 20 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 20 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			'es-mx': "Lanza 3 monedas. Este ataque hace 20 puntos de daño por cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 20 Schadenspunkte pro Kopf zu.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 20 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 20 pontos de dano para cada cara."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "H",

	thirdParty: {
		cardmarket: 857681
	}
}

export default card