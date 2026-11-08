import { Card } from "models/database/card"
import Set from "../Paradox Rift"

const card: Card = {
	dexId: [762],
	set: Set,

	name: {
		'en-us': "Steenee",
		'fr-fr': "Candine",
		'es-es': "Steenee",
		'it-it': "Steenee",
		'pt-br': "Steenee",
		'de-de': "Frubaila"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Bounsweet",
		'fr-fr': "Croquine",
		'es-es': "Bounsweet",
		'it-it': "Bounsweet",
		'pt-br': "Bounsweet",
		'de-de': "Frubberl"
	},
	stage: "Stage1",

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Spinning Attack",
			'fr-fr': "Attaque Tournante",
			'es-es': "Ataque Giratorio",
			'it-it': "Attacco Rotante",
			'pt-br': "Ataque Giratório",
			'de-de': "Rundumangriff"
		},

		damage: 30
	}, {
		cost: ["Grass", "Grass"],

		name: {
			'en-us': "Double Spin",
			'fr-fr': "Double Tour",
			'es-es': "Doble Giro",
			'it-it': "Doppioturbo",
			'pt-br': "Giro Duplo",
			'de-de': "Doppeldreher"
		},

		effect: {
			'en-us': "Flip 2 coins. This attack does 40 damage for each heads.",
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
			'es-es': "Lanza 2 monedas. Este ataque hace 40 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 40 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 40 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 40 Schadenspunkte pro Kopf zu."
		},

		damage: "40×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "G",

	description: {
		'en-us': "Steenee spreads a sweet scent that makes others feel invigorated. This same scent is popular for antiperspirants.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 740485,
				tcgplayer: 523608,
				cardtrader: 265005
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 740485,
				tcgplayer: 523608,
				cardtrader: 265005
			}
		},
	],

	illustrator: "Kariya",

	
}

export default card
