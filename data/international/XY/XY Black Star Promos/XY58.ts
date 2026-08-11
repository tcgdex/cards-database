import { Card } from 'models/database/card'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Malamar",
		'fr-fr': "Sepiatroce",
	},

	illustrator: "5ban Graphics",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		687,
	],

	hp: 90,

	types: [
		"Darkness",
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
				'en-us': "Contrary",
				'fr-fr': "Opposé"
			},
			effect: {
				'en-us': "If this Pokémon is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
				'fr-fr': "Si ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire lance une pièce pendant son tour, considérez que c'est pile."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Conform",
				'fr-fr': "Stop Θ",
			},
			effect: {
				'en-us': "If you have the same number of cards in your hand as your opponent, your opponent's Active Pokémon is now Confused.",
				'fr-fr': "Si vous avez le même nombre de cartes dans votre main que votre adversaire, le Pokémon Actif de votre adversaire est maintenant Confus."
			},
			damage: 40,

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,

	description: {
		'en-us': "It lures its prey close with hypnotic motions, then wraps its tentacles around it before finishing it off with digestive fluids.",
	},

	thirdParty: {
		cardmarket: 289783
	}
}

export default card
