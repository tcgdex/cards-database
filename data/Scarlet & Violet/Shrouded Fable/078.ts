import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Persian",
		fr: "Persian",
		es: "Persian",
		it: "Persian",
		pt: "Persian",
		de: "Snobilikat"
	},

	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 110,
	types: ["Colorless"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Fury Swipes",
			fr: "Combo-Griffe",
			es: "Golpes Furia",
			it: "Sfuriate",
			pt: "Golpes de Fúria",
			de: "Kratzfurie"
		},

		effect: {
			en: "Flip 3 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Slashing Claw",
			fr: "Griffe Taillante",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 100
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card