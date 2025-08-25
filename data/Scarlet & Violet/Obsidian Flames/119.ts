import { Card } from "../../../interfaces"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [949],
	set: Set,

	name: {
		fr: "Terracruel",
		en: "Toedscruel",
		es: "Toedscruel",
		it: "Toedscruel",
		pt: "Toedscruel",
		de: "Tenterra"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			fr: "Bataille",
			en: "Beat",
			es: "Toque",
			it: "Battuta",
			pt: "Pulso",
			de: "Verprügler"
		},

		damage: 40
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			fr: "Double Fouet",
			en: "Double Whip",
			es: "Doble Latigazo",
			it: "Doppiafrustata",
			pt: "Chicote Duplo",
			de: "Doppelpeitsche"
		},

		effect: {
			fr: "Lancez 2 pièces. Cette attaque inflige 100 dégâts pour chaque côté face.",
			en: "Flip 2 coins. This attack does 100 damage for each heads.",
			es: "Lanza 2 monedas. Este ataque hace 100 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 100 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 100 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 100 Schadenspunkte pro Kopf zu."
		},

		damage: "100×"
	}],

	retreat: 2,
	regulationMark: "G",

	variants: {
		holo: false
	},

	illustrator: "Kouki Saitou",

	thirdParty: {
		cardmarket: 725102
	}
}

export default card