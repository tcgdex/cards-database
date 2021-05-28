import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath V",
		en: "Grimmsnarl V"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			fr: "Morsure",
			en: "Bite"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			fr: "Poing Piquant",
			en: "Spiky Knuckle"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon.",
			en: "Put 2 Darkness Energy attached to this Pokémon into your hand."
		},

		damage: 200,
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card