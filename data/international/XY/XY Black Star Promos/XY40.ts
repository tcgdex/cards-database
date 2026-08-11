import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Ditto",
		'fr-fr': "Métamorph",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		132,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Metamorphosis Gene",
				'fr-fr': "Gène Métamorphique",
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon, it can use the attacks of your opponent's Active Pokémon. (You still need the necessary Energy to use each attack.)",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif, il peut utiliser les attaques du Pokémon Actif de votre adversaire. (Vous avez toujours besoin de l'Énergie nécessaire pour utiliser chaque attaque.)",
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Stick On",
				'fr-fr': "Collage",
			},
			effect: {
				'en-us': "Attach a basic Energy card from your discard pile to this Pokémon.",
				'fr-fr': "Attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
			},
			damage: 10,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It has the ability to reconstitute its entire cellular structure to transform into whatever it sees.",
	},

	thirdParty: {
		cardmarket: 289703
	}
}

export default card
