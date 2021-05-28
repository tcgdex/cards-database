import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	name: {
		fr: "Pashmilla",
		en: "Cinccino"
	},

	illustrator: "Shibuzoh.",
	rarity: "Common",
	category: "Pokemon",
	set: Set,
	hp: 90,

	types: [
		"Colorless",
	],

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				fr: "Faire Avec",
				en: "Make Do"
			},
			effect: {
				fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
				en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				fr: "Assistance Énergétique",
				en: "Energy Assist"
			},
			effect: {
				fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
				en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon."
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

	retreat: 1,

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou"
	}
}

export default card
