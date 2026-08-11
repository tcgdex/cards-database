import { Card } from 'models/database/card'
import Set from '../Hidden Fates Shiny Vault'

const card: Card = {
	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
	},
	illustrator: "Hideki Ishikawa",
	rarity: "Shiny rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		687,
	],
	hp: 90,
	types: [
		"Psychic",
	],
	evolveFrom: {
		'en-us': "Inkay",
		'fr-fr': "Sepiatop",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Psychic Recharge",
				'fr-fr': "Recharge Psy",
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may attach a Psychic Energy card from your discard pile to 1 of your Benched Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic de votre pile de défausse à l’un de vos Pokémon de Banc.",
			},
		},
	],
	attacks: [
		{
			cost: [
				"Psychic",
				"Psychic",
				"Colorless",
			],
			name: {
				'en-us': "Psychic Sphere",
				'fr-fr': "Sphère Psy",
			},

			damage: 60,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 2,




	description: {
		'en-us': "It lures prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.",
	},
}

export default card
