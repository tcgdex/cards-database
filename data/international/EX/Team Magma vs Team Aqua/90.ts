import { Card } from 'models/database/card'
import Set from '../Team Magma vs Team Aqua'

const card: Card = {
	name: {
		'en-us': "Cradily ex",
		'fr-fr': "Vacilys ex",
		'de-de': "Wielie ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [346],

	hp: 150,

	stage: "Stage2",
	types: [
		"Grass"
	],

	suffix: "ex",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Primal Vibes",
				'fr-fr': "Vibrations primales",
				'de-de': "Primal Vibes"
			},
			effect: {
				'en-us': "As long as Cradily ex is your Active Pokémon, your opponent can't play a Pokémon from his or her hand to evolve his or her Active Pokémon.",
				'fr-fr': "Tant que Vacilys ex est votre Pokémon Actif, votre adversaire ne peut pas jouer de Pokémon de sa main pour faire évoluer ses Pokémon Actifs.",
				'de-de': "As long as Cradily ex is your Acrive Pokémon, your opponent can't play a Pokémon from his or her hand to evolve his or her Active Pokémon"
			}
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Eerie Light",
				'fr-fr': "Lumière étrange",
				'de-de': "Eerie Light"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Confused.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Confus.",
				'de-de': "The Defending Pokémon is now Confused."
			},
			damage: 30,

		},
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Acidic Poison",
				'fr-fr': "Poison acide",
				'de-de': "Acidic Poison"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned and Burned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné et Brûlé.",
				'de-de': "The Defending Pokémon is now Poisoned and Burned."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
		{
			type: "Fire",
			value: "×2"
		},
	],


	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 84457,
				cardmarket: 276067
			}
		}
	]
}

export default card
