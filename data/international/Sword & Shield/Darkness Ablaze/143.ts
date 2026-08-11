import { Card } from 'models/database/card'
import Set from '../Darkness Ablaze'

const card: Card = {
	name: {
		'en-us': "Salamence V",
		'fr-fr': "Drattak V",
		'es-es': "Salamence V",
		'it-it': "Salamence V",
		'pt-br': "Salamence V",
		'de-de': "Brutalanda V"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Holo Rare V",
	category: "Pokemon",
	dexId: [373],
	set: Set,
	hp: 220,

	types: [
		"Colorless",
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Swoop Across",
				'fr-fr': "Déferlement Aérien",
				'es-es': "Vuelo Transversal",
				'it-it': "Volo Radente",
				'pt-br': "Investida Cruzada",
				'de-de': "Überflieger"
			},
			effect: {
				'en-us': "This attack does 30 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 30 dégâts à chacun des Pokémon de votre adversaire. (N'appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 30 puntos de daño a cada uno de los Pokémon de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 30 danni a ciascuno dei Pokémon del tuo avversario. Non applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 30 pontos de dano a cada um dos Pokémon do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				'de-de': "Diese Attacke fügt jedem Pokémon deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Heavy Storm",
				'fr-fr': "Grosse Tempête",
				'es-es': "Fuerte Tormenta",
				'it-it': "Grantempesta",
				'pt-br': "Tempestade",
				'de-de': "Schwerer Sturm"
			},

			damage: 160,

		},
	],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Fighting",
			value: "-30"
		},
	],

	retreat: 2,
	regulationMark: "D",


	stage: "Basic",
	suffix: "V",

	variants: [
		{
			type: 'holo',
			thirdParty: {
				cardmarket: 483594,
				tcgplayer: 219343
			}
		},
	],
}

export default card
