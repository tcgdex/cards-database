import { Card } from 'models/database/card'
import Set from '../Generations'

const card: Card = {
	name: {
		'en-us': "Jynx",
		'fr-fr': "Lippoutou",
	},

	illustrator: "Naoki Saito",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		124,
	],

	hp: 70,

	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Victory Kiss",
				'fr-fr': "Baiser de la Victoire",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), if this Pokémon is on your Bench, you may heal 10 damage from your Active Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est sur votre Banc, vous pouvez soigner 10 dégâts à votre Pokémon Actif.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Hug",
				'fr-fr': "Câlin",
			},
			effect: {
				'en-us': "The Defending Pokémon can't retreat during your opponent's next turn.",
				'fr-fr': "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "It wiggles its hips as it walks. It can cause people to dance in unison with it.",
	},

	thirdParty: {
		cardmarket: 288474,
		tcgplayer: 113694
	}
}

export default card
