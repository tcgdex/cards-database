import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dispareptil"
	},

	illustrator: "tetsuya koizumi",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	evolveFrom: {
		fr: "Fantyrm"
	},

	attacks: [{
		name: {
			fr: "Citation"
		},

		effect: {
			fr: "Cherchez un Fantyrm dans votre deck, puis placez-le sur votre Banc. Mélangez ensuite votre deck."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Morsure"
		},

		damage: 40,
		cost: ["Psychic", "Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card