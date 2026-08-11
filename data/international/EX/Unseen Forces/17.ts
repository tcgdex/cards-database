import { Card } from 'models/database/card'
import Set from '../Unseen Forces'

const card: Card = {
	name: {
		'en-us': "Typhlosion",
		'fr-fr': "Typhlosion",
		'de-de': "Tornupto"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		157,
	],

	hp: 110,

	types: [
		"Fire",
	],

	evolveFrom: {
		'en-us': "Quilava",
		'fr-fr': "Feurisson"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Poke-BODY",
			name: {
				'en-us': "Burning Aura",
				'fr-fr': "Aura brûlante",
				'de-de': "Burning Aura"
			},
			effect: {
				'en-us': "As long as Typhlosion is your Active Pokémon, put 1 damage counter on each Active Pokémon (both yours and your opponent's) between turns.",
				'fr-fr': "Tant que Typhlosion est votre Pokémon Actif, placez 1 marqueur de dégât sur chaque Pokémon Actif (les vôtres et ceux de votre adversaire) entre deux tours.",
				'de-de': "As long as Typhlosion is your Active Pokémon, put 1 damage counter on each Active Pokémon (both yours and your opponent's) between turns."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
			],
			name: {
				'en-us': "Flickering Flames",
				'fr-fr': "Flammes vacillantes",
				'de-de': "Flickering Flames"
			},
			effect: {
				'en-us': "The Defending Pokémon is now Asleep.",
				'fr-fr': "Le Pokémon Défenseur est maintenant Endormi.",
				'de-de': "The Defending Pokémon is now Asleep."
			},
			damage: 20,

		},
		{
			cost: [
				"Fire",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Rage",
				'fr-fr': "Frénésie",
				'de-de': "Rage"
			},
			effect: {
				'en-us': "Does 50 damage plus 10 more damage for each damage counter on Typhlosion.",
				'fr-fr': "Inflige 50 dégâts plus 10 dégâts supplémentaires pour chaque marqueur de dégât sur Typhlosion.",
				'de-de': "Does 50 damage plus 10 more damage for each damage counter on Typhlosion."
			},
			damage: "50+",

		},
	],

	weaknesses: [
		{
			type: "Water",
			value: "×2"
		},
	],

	
	retreat: 1,


	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 90103,
				cardmarket: 276663
			},
		},
		{
			type: "reverse",
			stamp: ["set-logo"],
			thirdParty: {
				tcgplayer: 90103,
				cardmarket: 276663
			},
		},
		{
			type: "normal",
		}
	],
}

export default card
