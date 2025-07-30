import { Card } from "../../../interfaces"
import Set from "../Temporal Forces"

const card: Card = {
	set: Set,

	name: {
		en: "Palafin",
		fr: "Superdofin",
		es: "Palafin",
		it: "Palafin",
		pt: "Palafin",
		de: "Delfinator"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 150,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Vanguard Punch",
			fr: "Poing Avant-Garde",
			es: "Puño Vanguardia",
			it: "Pugno del Paladino",
			pt: "Soco de Vanguarda",
			de: "Avantgarde-Hieb"
		},

		effect: {
			en: "This Pokémon also does 10 damage to itself for each damage counter on it.",
			fr: "Ce Pokémon s'inflige aussi 10 dégâts pour chaque marqueur de dégâts placé sur lui.",
			es: "Este Pokémon también se hace 10 puntos de daño a sí mismo por cada contador de daño que tenga sobre él.",
			it: "Questo Pokémon infligge anche 10 danni a se stesso per ogni segnalino danno presente su di esso.",
			pt: "Este Pokémon também causa 10 pontos de dano a si mesmo para cada contador de dano nele.",
			de: "Dieses Pokémon fügt für jede auf ihm liegende Schadensmarke auch sich selbst 10 Schadenspunkte zu."
		},

		damage: 130
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			en: "Double Hit",
			fr: "Coup Double",
			es: "Doble Golpe",
			it: "Doppiosmash",
			pt: "Golpe Duplo",
			de: "Doppelschlag"
		},

		effect: {
			en: "Flip 2 coins. This attack does 90 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 90 dégâts pour chaque côté face.",
			es: "Lanza 2 monedas. Este ataque hace 90 puntos de daño por cada cara.",
			it: "Lancia due volte una moneta. Questo attacco infligge 90 danni ogni volta che esce testa.",
			pt: "Jogue 2 moedas. Este ataque causa 90 pontos de dano para cada cara.",
			de: "Wirf 2 Münzen. Diese Attacke fügt 90 Schadenspunkte pro Kopf zu."
		},

		damage: "90×"
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "DOM",

	thirdParty: {
		cardmarket: 760679
	}
}

export default card