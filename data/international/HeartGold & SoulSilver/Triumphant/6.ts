import { Card } from 'models/database/card'
import Set from '../Triumphant'

const card: Card = {
	name: {
		'en-us': "Nidoking",
		'fr-fr': "Nidoking",
		'de-de': "Nidoking"
	},

	illustrator: "match",
	rarity: "Holo Rare",
	category: "Pokemon",
	set: Set,

	dexId: [34],

	hp: 140,

	types: [
		"Fighting"
	],

	evolveFrom: {
		'en-us': "Nidorino",
		'fr-fr': "Nidorino"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Pheromone Stamina",
				'fr-fr': "Endurance aux phéromones",
				'de-de': "Pheromon-Ausdauer"
			},
			effect: {
				'en-us': "Nidoking gets +20 HP for each Nidoqueen you have in play.",
				'fr-fr': "Nidoking reçoit +20 PV pour chacun de vos Nidoqueen en jeu.",
				'de-de': "Nidoking erhält +20 KP für jedes deiner Nidoqueen im Spiel."
			}
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Venomous Horn",
				'fr-fr': "Corne venimeuse",
				'de-de': "Giftiges Horn"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Poisoned.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Empoisonné.",
				'de-de': "Das Verteidigende Pokémon ist jetzt vergiftet."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Lightning",
			value: "-20"
		},
	],

	retreat: 3,

	description: {
		'en-us': "Its tail is thick and powerful. If it binds an enemy, it can render the victim helpless quite easily."
	},

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 87699,
				cardmarket: 279536
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 279536,
				tcgplayer: 87699
			}
		},
		{
			type: "holo",
			foil: 'cracked-ice',
			thirdParty: {
				tcgplayer: 125071
			}
		},
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 125072,
			}
		},
	],

}

export default card
