import { Card } from "../../../interfaces"
import Set from "../Pokémon GO"

const card: Card = {
	dexId: [521],
	set: Set,

	name: {
		en: "Unfezant",
		fr: "Déflaisan",
		es: "Unfezant",
		it: "Unfezant",
		pt: "Unfezant",
		de: "Fasasnob"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Tranquill",
		fr: "Colombeau",
		es: "Tranquill",
		it: "Tranquill",
		pt: "Tranquill",
		de: "Navitaub"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Gust",
			fr: "Tornade",
			es: "Tornado",
			it: "Raffica",
			pt: "Lufada de Vento",
			de: "Windstoß"
		},

		damage: 30
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Hurricane Wing",
			fr: "Tornad'Aile",
			es: "Ala Huracán",
			it: "Ala Uragano",
			pt: "Asa do Furacão",
			de: "Hurrikanschwinge"
		},

		effect: {
			en: "Flip 4 coins. This attack does 70 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 70 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 70 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 70 danni ogni volta che esce testa.",
			pt: "Jogue 4 moedas. Este ataque causa 70 pontos de dano para cada cara.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 70 Schadenspunkte pro Kopf zu."
		},

		damage: "70×"
	}],

	retreat: 1,
	regulationMark: "F",
	variants: {
		"normal": true,
		"reverse": true,
		"holo": false
	}
}

export default card