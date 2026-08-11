import { Card } from "models/database/card"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		'fr-fr': "Léboulérou",
		'en-us': "Rellor",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},

	rarity: "Common",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'fr-fr': "Boulé-Roulade",
			'en-us': "Ball Roll",
			'es-es': "Rodabola",
			'it-it': "Rotopalla",
			'pt-br': "Rolo Bola",
			'de-de': "Ballrolle"
		},

		effect: {
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			'es-es': "Lanza 1 moneda hasta que salga cruz. Este ataque hace 30 puntos de daño por cada cara.",
			'it-it': "Lancia una moneta finché non esce croce. Questo attacco infligge 30 danni ogni volta che esce testa.",
			'pt-br': "Jogue uma moeda até sair coroa. Este ataque causa 30 pontos de dano para cada cara.",
			'de-de': "Wirf so lange 1 Münze, bis sie Zahl zeigt. Diese Attacke fügt 30 Schadenspunkte pro Kopf zu."
		},

		damage: "30×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "G",

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 715499,
				tcgplayer: 497437,
				cardtrader: 248323
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 715499,
				tcgplayer: 497437,
				cardtrader: 248323
			}
		},
	],

	illustrator: "Anesaki Dynamic",

	description: {
		'en-us': "This Pokémon creates a mud ball by mixing sand and dirt with psychic energy. It treasures its mud ball more than its own life.",
	},
}

export default card
