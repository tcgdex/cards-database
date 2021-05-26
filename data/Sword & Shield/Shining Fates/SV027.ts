import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lézargus"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Water"],

	evolveFrom: {
		fr: "Arrozard"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Affaires Louches"
		},

		effect: {
			fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Dresseur, les montrer, puis les ajouter à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Aquaballe"
		},

		effect: {
			fr: "Cette attaque inflige aussi 20 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)"
		},

		damage: 120,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card