import { Card } from 'models/database/card'
import Set from '../Shining Fates'

const card: Card = {
	dexId: [382],
	set: Set,

	name: {
		'fr-fr': "Kyogre",
		'en-us': "Kyogre",
		'es-es': "Kyogre",
		'it-it': "Kyogre",
		'pt-br': "Kyogre",
		'de-de': "Kyogre"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Amazing Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			'fr-fr': "Déferlante Magnifique",
			'en-us': "Amazing Surge",
			'es-es': "Oleada Increíble",
			'it-it': "Ondata Policroma",
			'pt-br': "Rebentação Incrível",
			'de-de': "Atemberaubende Woge"
		},

		effect: {
			'fr-fr': "Cette attaque inflige 80 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
			'en-us': "This attack does 80 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			'es-es': "Este ataque hace 80 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
			'it-it': "Questo attacco infligge 80 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
			'pt-br': "Este ataque causa 80 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
			'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 80 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
		},

		cost: ["Water", "Lightning", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D",


	stage: "Basic",

	description: {
		'en-us': "It is said to have widened the seas by causing downpours. It had been asleep in a marine trench."
	},

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 539128,
				tcgplayer: 232414
			}
		},
	],
}

export default card
