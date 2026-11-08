import { Card } from 'models/database/card'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		'en-us': "Pupitar",
		'fr-fr': "Ymphect",
		'es-es': "Pupitar",
		'it-it': "Pupitar",
		'pt-br': "Pupitar",
		'de-de': "Pupitar"
	},

	illustrator: "Hironobu Yoshida",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		247,
	],

	hp: 80,

	types: [
		"Fighting",
	],

	evolveFrom: {
		'en-us': "Larvitar",
		'fr-fr': "Embrylex",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Skull Bash",
				'fr-fr': "Coud’Krâne",
				'es-es': "Cabezazo",
				'it-it': "Capocciata",
				'pt-br': "Quebra-crânio",
				'de-de': "Schädelwumme"
			},

			damage: 20,

		},
		{
			cost: [
				"Fighting",
				"Fighting",
			],
			name: {
				'en-us': "Dust Devil",
				'fr-fr': "Tempête de Sable",
				'es-es': "Tormenta de Arena",
				'it-it': "Polvere Infernale",
				'pt-br': "Tempestade de Areia",
				'de-de': "Sandteufel"
			},
			effect: {
				'en-us': "This attack does 20 damage to each non-Fighting Pokémon (both yours and your opponent’s). (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Cette attaque inflige 20 dégâts à chaque Pokémon qui n’est pas un Pokémon Fighting (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				'es-es': "Este ataque hace 20 puntos de daño a cada Pokémon no Fighting (tanto tuyos como de tu rival). (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				'it-it': "Questo attacco infligge 20 danni a ciascun Pokémon non di tipo Fighting, sia tuo che del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				'pt-br': "Este ataque causa 20 pontos de dano a cada Pokémon que não for um Pokémon Fighting (seus e do seu oponente). (Não aplique Fraqueza e Resistência aos Pokémon no Banco.)",
				'de-de': "Diese Attacke fügt jedem Pokémon (deinen und denen deines Gegners), das kein Fighting-Pokémon ist, 20 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Its shell is as hard as sheet rock, and it is also very strong. Its thrashing can topple a mountain.",
	},

	thirdParty: {
		cardmarket: 361320,
		tcgplayer: 170897
	}
}

export default card
