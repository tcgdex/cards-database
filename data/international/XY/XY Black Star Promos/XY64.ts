import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Rayquaza",
		'fr-fr': "Rayquaza",
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		384,
	],

	hp: 120,

	types: [
		"Dragon",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Ozone Wall",
				'fr-fr': "Mur d'Ozone",
			},
			effect: {
				'en-us': "As long as this Pokémon is on your Bench, prevent all damage done to this Pokémon by attacks (both yours and your opponent's).",
				'fr-fr': "Tant que ce Pokémon est sur votre Banc, évitez tous les dégâts infligés à ce Pokémon par des attaques (les vôtres et celles de votre adversaire).",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fire",
				"Fire",
				"Lightning",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Pulse",
				'fr-fr': "Dracochoc"
			},
			effect: {
				'en-us': "Discard the top 3 cards of your deck.",
				'fr-fr': "Défaussez les 3 cartes du dessus de votre deck."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	description: {
		'en-us': "It lives in the ozone layer far above the clouds and cannot be seen from the ground.",
	},

	thirdParty: {
		cardmarket: 553219
	}
}

export default card
