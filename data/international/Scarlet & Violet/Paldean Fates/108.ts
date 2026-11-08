import { Card } from "models/database/card"
import Set from "../Paldean Fates"

const card: Card = {
	dexId: [953],
	set: Set,

	name: {
		'en-us': "Rellor",
		'fr-fr': "Léboulérou",
		'es-es': "Rellor",
		'it-it': "Rellor",
		'pt-br': "Rellor",
		'de-de': "Relluk"
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Ball Roll",
			'fr-fr': "Boulé-Roulade",
			'es-es': "Rodabola",
			'it-it': "Rotopalla",
			'pt-br': "Rolo Bola",
			'de-de': "Ballrolle"
		},

		effect: {
			'en-us': "Flip a coin until you get tails. This attack does 30 damage for each heads.",
			'fr-fr': "Lancez une pièce jusqu'à obtenir un côté pile. Cette attaque inflige 30 dégâts pour chaque côté face.",
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
			type: 'holo',
			thirdParty: {
				cardmarket: 751647,
				tcgplayer: 534482,
				cardtrader: 274292
			}
		},
	],

	illustrator: "Misa Tsutsui",

	description: {
		'en-us': "This Pokémon creates a mud ball by mixing sand and dirt with psychic energy. It treasures its mud ball more than its own life.",
	},

}

export default card
