import { Card } from "models/database/card"
import Set from "../Obsidian Flames"

const card: Card = {
	dexId: [951],
	set: Set,

	name: {
		'fr-fr': "Pimito",
		'en-us': "Capsakid",
		'es-es': "Capsakid",
		'it-it': "Capsakid",
		'pt-br': "Capsakid",
		'de-de': "Chilingel"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			'fr-fr': "Double Coup d'Boule",
			'en-us': "Double Headbutt",
			'es-es': "Doble Cabezazo",
			'it-it': "Doppia Bottintesta",
			'pt-br': "Cabeçada Dupla",
			'de-de': "Doppelte Kopfnuss"
		},

		effect: {
			'fr-fr': "Lancez 2 pièces. Cette attaque inflige 50 dégâts pour chaque côté face.",
			'en-us': "Flip 2 coins. This attack does 50 damage for each heads.",
			'es-es': "Lanza 2 monedas. Este ataque hace 50 puntos de daño por cada cara.",
			'it-it': "Lancia due volte una moneta. Questo attacco infligge 50 danni ogni volta che esce testa.",
			'pt-br': "Jogue 2 moedas. Este ataque causa 50 pontos de dano para cada cara.",
			'de-de': "Wirf 2 Münzen. Diese Attacke fügt 50 Schadenspunkte pro Kopf zu."
		},

		damage: "50×"
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
		'en-us': "The more sunlight this Pokémon bathes in, the more spicy chemicals are produced by its body, and thus the spicier its moves become.",
	},

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 725104,
				tcgplayer: 510900,
				cardtrader: 255584
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 725104,
				tcgplayer: 510900,
				cardtrader: 255584
			}
		},
	],

	illustrator: "Pani Kobayashi",

	
}

export default card
