import { Card } from 'models/database/card'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		'en-us': "Slaking",
		'fr-fr': "Monaflemit",
		'de-de': "Letarking"
	},

	illustrator: "Ken Sugimori",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [289],

	hp: 120,

	types: [
		"Colorless"
	],

	evolveFrom: {
		'en-us': "Vigoroth",
		'fr-fr': "Vigoroth"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Lazy",
				'fr-fr': "Fainéant",
				'de-de': "Lazy"
			},
			effect: {
				'en-us': "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers.",
				'fr-fr': "Tant que Monaflemit est votre Pokémon Actif, le Pokémon de votre adversaire ne peut utiliser de Poké-Powers.",
				'de-de': "As long as Slaking is your Active Pokémon, your opponent's Pokémon can't use any Poké-Powers."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Critical Move",
				'fr-fr': "Mouvement décisif",
				'de-de': "Critical Move"
			},
			effect: {
				'en-us': "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn.",
				'fr-fr': "Défaussez une carte Énergie de base attachée à Monaflemit ou cette attaque est sans effet. Monaflemit ne pourra pas attaquer pendant votre prochain tour.",
				'de-de': "Discard a basic Energy card attached to Slaking or this attack does nothing. Slaking can't attack during your next turn."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],


	retreat: 3,


	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 275660,
				tcgplayer: 89288
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275660,
				tcgplayer: 89288
			}
		},
	],

}

export default card
