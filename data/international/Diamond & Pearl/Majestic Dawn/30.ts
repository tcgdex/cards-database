import { Card } from 'models/database/card'
import Set from '../Majestic Dawn'

const card: Card = {
	name: {
		'en-us': "Torterra",
		'fr-fr': "Torterra",
		'de-de': "Chelterrar"
	},

	illustrator: "Daisuke Ito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		389,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Grotle",
		'fr-fr': "Boskara",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Earthquake",
				'fr-fr': "Séisme",
				'de-de': "Erdbeben"
			},
			effect: {
				'en-us': "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
				'fr-fr': "Inflige 10 dégâts à chacun de vos Pokémon de Banc. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
				'de-de': "Dieser Angriff fügt jedem Pokémon auf deiner Bank 10 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 60,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Frenzy Plant",
				'fr-fr': "Vege-Attak",
				'de-de': "Fauna-Statue"
			},
			effect: {
				'en-us': "Torterra can't use Frenzy Plant during your next turn.",
				'fr-fr': "Torterra ne peut pas utiliser Vege-Attak lors de votre prochain tour.",
				'de-de': "Chelterrar kann Fauna-Statue in deinem nächsten Zug nicht einsetzen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "+30"
		},
	],

	retreat: 4,

	description: {
		'en-us': "Groups of this Pokémon migrating in search of water have been mistaken for \"moving forests.\"",
	},

	thirdParty: {
		cardmarket: 278079,
		tcgplayer: 89984
	},

	variants: [
		{
			type: "normal"
		},
		{
			type: "reverse"
		}
	]
}

export default card
