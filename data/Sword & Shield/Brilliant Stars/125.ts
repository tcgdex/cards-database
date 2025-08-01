import { Card } from "../../../interfaces"
import Set from "../Brilliant Stars"

const card: Card = {
	dexId: [573],
	set: Set,

	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
		es: "Minccino",
		it: "Minccino",
		pt: "Minccino",
		de: "Picochilla"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Slap",
			fr: "Gifle",
			es: "Bofetón",
			it: "Sberla",
			pt: "Tapa",
			de: "Hieb"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Triple Axel",
			fr: "Triple Axel",
			es: "Triple Axel",
			it: "Triplo Axel",
			pt: "Pinote Triplo",
			de: "Dreifach-Axel"
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
	}],

	retreat: 1,
	regulationMark: "F",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	thirdParty: {
		cardmarket: 608671
	}
}

export default card