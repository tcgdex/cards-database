import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Miaouss de Galar"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 60,
	types: ["Metal"],

	abilities: [{
		type: "Ability",

		name: {
			fr: "Rugissement Évolutif"
		},

		effect: {
			fr: "Vous devez défausser 2 cartes de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez chercher dans votre deck un Berserkatt de Galar, le montrer, puis l’ajouter à votre main. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Griffe"
		},

		damage: 20,
		cost: ["Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card