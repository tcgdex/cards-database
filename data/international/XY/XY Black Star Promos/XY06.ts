import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Yveltal",
		'fr-fr': "Xerneas",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		717,
	],

	hp: 130,

	types: [
		"Darkness",
	],

	stage: "Basic",

	attacks: [
		{
			cost: [
				"Darkness",
			],

			name: {
				'en-us': "Oblivion Wing",
				'fr-fr': "Mort-Ailes",
			},

			effect: {
				'en-us': "Attach a Darkness Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Attachez une carte Énergie Darkness de votre pile de défausse à l'un de vos Pokémon de Banc.",
			},

			damage: 30
		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Darkness Blade",
				'fr-fr': "Lame Obscure",
			},
			effect: {
				'en-us': "Flip a coin. If tails, this Pokémon can't attack during your next turn.",
				'fr-fr': "Lancez une pièce. Si c'est pile, ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
			},
			damage: 100,

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
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "When this legendary Pokémon's wings and tail feathers spread wide and glow red, it absorbs the life force of all living creatures.",
	},

	thirdParty: {
		cardmarket: 281315
	}
}

export default card
