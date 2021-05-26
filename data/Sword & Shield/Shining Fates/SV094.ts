import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Pashmilla"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Chinchidou"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Faire Avec"
		},

		effect: {
			fr: "Vous devez défausser une carte de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez piocher 2 cartes."
		}
	}],

	attacks: [{
		name: {
			fr: "Assistance Énergétique"
		},

		effect: {
			fr: "Attachez une carte Énergie de base de votre pile de défausse à l’un de vos Pokémon de Banc."
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