import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Liepard",
		fr: "Léopardus",
		es: "Liepard",
		it: "Liepard",
		pt: "Liepard",
		de: "Kleoparda"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 100,
	types: ["Darkness"],

	evolveFrom: {
		en: "Purrloin",
		fr: "Chacripan",
		es: "Purrloin",
		it: "Purrloin",
		pt: "Purrloin",
		de: "Felilou"
	},

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
			en: "Flip 3 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			es: "Lanza 3 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			it: "Lancia tre volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			pt: "Jogue 3 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			de: "Wirf 3 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Claw Slash",
			fr: "Tranch'Griffe",
			es: "Cuchillada Garra",
			it: "Lacerartiglio",
			pt: "Golpe de Garra",
			de: "Klauenschlitzer"
		},

		damage: 110
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card