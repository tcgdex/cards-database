import { Card } from "models/database/card"
import Set from "../MEP Black Star Promos"

const card: Card = {
	set: Set,

	name: {
		'en-us': "Chespin",
		'fr-fr': "Marisson",
		'es-es': "Chespin",
		'es-mx': "Chespin",
		'de-de': "Igamaro",
		'it-it': "Chespin",
		'pt-br': "Chespin"
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
			'en-us': "Pin Missile",
			'fr-fr': "Dard-Nuée",
			'es-es': "Pin Misil",
			'it-it': "Missilspillo",
			'pt-br': "Pin Missile",
			'de-de': "Nadelrakete"
		},

		effect: {
			'en-us': "Flip 4 coins. This attack does 10 damage for each heads.",
			'fr-fr': "Lancez 4 pièces. Cette attaque inflige 10 dégâts pour chaque côté face.",
			'es-es': "Lanza 4 monedas. Este ataque hace 10 puntos de daño por cada cara.",
			'it-it': "Lancia quattro volte una moneta. Questo attacco infligge 10 danni ogni volta che esce testa.",
			'pt-br': "Flip 4 coins. This attack does 10 damage for each heads.",
			'de-de': "Wirf 4 Münzen. Diese Attacke fügt 10 Schadenspunkte pro Kopf zu."
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
