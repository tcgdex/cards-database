import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pashmilla",
		en: "Cinccino"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Chinchidou",
		en: "Minccino"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Faire Avec",
			en: "Make Do"
		},

		effect: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes.",
			en: "You must discard a card from your hand in order to use this Ability. Once during your turn, you may draw 2 cards."
		}
	}],

	attacks: [{
		name: {
			fr: "Assistance Énergétique",
			en: "Energy Assist"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc.",
			en: "Attach a basic Energy card from your discard pile to 1 of your Benched Pokémon."
		},

		damage: 40,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card