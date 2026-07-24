import { Card } from "../../../interfaces"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		en: "Chespin",
		fr: "Marisson",
		es: "Chespin",
		'es-mx': "Chespin",
		de: "Igamaro",
		it: "Chespin",
		pt: "Chespin"
	},

	illustrator: "Saboteri",
	rarity: "Promo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",
	dexId: [650],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
			es: "Pin Misil",
			it: "Missilspillo",
			pt: "Pin Missile",
			de: "Nadelrakete"
		},

		effect: {
			en: "Flip 4 coins. This attack does 10 damage for each heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			es: "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			it: "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			pt: "Flip 4 coins. This attack does 10 damage for each heads.",
			de: "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
		},

		damage: "10×",
	}],

	retreat: 2,
	regulationMark: "J",

	weaknesses: [{
		type: "Fire",
		value: "x2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 891889
			}
		},
	],
}

export default card
