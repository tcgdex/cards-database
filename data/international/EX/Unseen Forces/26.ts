import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Hitmontop",
		'fr-fr': "Kapoera",
		'de-de': "Kapoera"
	},

	illustrator: "Hisao Nakamura",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		237,
	],

	hp: 70,

	types: [
		"Fighting",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Stages of Evolution",
				'fr-fr': "Niveaux d'Évolution",
				'de-de': "Stages of Evolution"
			},
			effect: {
				'en-us': "As long as Hitmontop is an Evolved Pokémon, is your Active Pokémon, and is damaged by an opponent's attack (even if Hitmontop is Knocked Out), put 2 damage counters on the Attacking Pokémon.",
				'fr-fr': "Tant que Kapoera est un Pokémon Évolué et votre Pokémon Actif et qu'une attaque de votre adversaire lui inflige des dégâts (même si Kapoera est mis K.O), placez 2 marqueurs de dégât sur le Pokémon Attaquant.",
				'de-de': "As long as Electabuzz is an Evolved Pokémon, is your Active Pokémon, and is damaged by an opponent's attack (even if Hitmontop is Knocked Out), put 2 damage counters on the Attacking Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Colorless",
			],
			name: {
				'en-us': "Upward Kick",
				'fr-fr': "Coup'd pied au menton",
				'de-de': "Upward Kick"
			},
			effect: {
				'en-us': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 30 more damage.",
				'fr-fr': "Si le Pokémon Défenseur possède déjà au moins 2 marqueurs de dégât, cette attaque inflige 20 dégâts plus 30 dégâts supplémentaires.",
				'de-de': "If the Defending Pokémon already has at least 2 damage counters on it, this attack does 20 damage plus 30 more damage."
			},
			damage: "20+",

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Spiral Kick",
				'fr-fr': "Coup'd pied en spirale",
				'de-de': "Spiral Kick"
			},
			effect: {
				'en-us': "n/a",
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 86114,
				cardmarket: 276672
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 86114,
				cardmarket: 276672
			},
		}
	],
}

export default card
