import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Arrozard"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		fr: "Larméléon"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Affaires Louches"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck une carte Dresseur, la révéler, puis l’ajouter à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Goutte à Goutte"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card