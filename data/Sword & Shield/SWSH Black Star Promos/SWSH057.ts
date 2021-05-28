import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Grimmsnarl V",
		fr: "Angoliath V"
	},

	illustrator: "5ban Graphics",
	rarity: "Common",
	category: "Pokemon",
	hp: 220,
	types: ["Darkness"],

	attacks: [{
		name: {
			en: "Bite",
			fr: "Morsure"
		},

		damage: 40,
		cost: ["Darkness"]
	}, {
		name: {
			en: "Spiky Knuckle",
			fr: "Poing Piquant"
		},

		effect: {
			en: "Put 2 Darkness Energy attached to this Pokémon into your hand.",
			fr: "Ajoutez à votre main 2 Énergies Darkness attachées à ce Pokémon."
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