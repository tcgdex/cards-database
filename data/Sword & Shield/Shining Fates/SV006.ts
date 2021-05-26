import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gorythmic"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Grass"],

	evolveFrom: {
		fr: "Badabouin"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Rythme Voltaïque"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez chercher dans votre deck jusqu’à 2 cartes Énergie Grass, puis les attacher à l’un de vos Pokémon. Mélangez ensuite votre deck."
		}
	}],

	attacks: [{
		name: {
			fr: "Enfoncement"
		},

		damage: 140,
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card