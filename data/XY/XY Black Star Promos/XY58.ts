import { Card } from '../../../interfaces'
import Set from '../XY Black Star Promos'

const card: Card = {
	name: {
		en: "Malamar",
		fr: "Sepiatroce",
	},

	illustrator: "5ban Graphics",
	rarity: "None",
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
		en: "Inkay",
		fr: "Sepiatop",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Contrary",
				fr: "Opposé"
			},
			effect: {
				en: "If this Pokémon is your Active Pokémon, whenever your opponent flips a coin during his or her turn, treat it as tails.",
				fr: "Si ce Pokémon est votre Pokémon Actif, chaque fois que votre adversaire lance une pièce pendant son tour, considérez que c'est pile."
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
				en: "Conform",
				fr: "Stop Θ",
			},
			effect: {
				en: "If you have the same number of cards in your hand as your opponent, your opponent's Active Pokémon is now Confused.",
				fr: "Si vous avez le même nombre de cartes dans votre main que votre adversaire, le Pokémon Actif de votre adversaire est maintenant Confus."
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

	thirdParty: {
		cardmarket: 289783
	}
}

export default card
