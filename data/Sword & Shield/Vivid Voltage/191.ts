import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	set: Set,

	name: {
		fr: "Togekiss VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 310,
	types: ["Colorless"],

	evolveFrom: {
		fr: "Togekiss-V"
	},

	attacks: [{
		name: {
			fr: "Glissomax"
		},

		effect: {
			fr: "Vous pouvez chercher dans votre deck jusqu’à 2 cartes, puis les ajouter à votre main. Mélangez ensuite votre deck."
		},

		damage: 120,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}]
}

export default card