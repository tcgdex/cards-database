import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Tyrantrum EX",
		'fr-fr': "Rexillius EX",
	},

	illustrator: "Eske Yoshinob",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		697,
	],

	hp: 180,

	types: [
		"Dragon",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Despotic Fang",
				'fr-fr': "Croc Despotique",
			},
			effect: {
				'en-us': "Damage from this Pokémon's attacks isn't affected by any effects on your opponent's Active Pokémon.",
				'fr-fr': "Les dégâts des attaques de ce Pokémon ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Fighting",
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				'en-us': "Dragon Impact",
				'fr-fr': "Impact du Dragon"
			},
			effect: {
				'en-us': "Discard 3 Energy attached to this Pokémon.",
				'fr-fr': "Défaussez 3 Énergies attachées à ce Pokémon."
			},
			damage: 190,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 289789
	}
}

export default card
