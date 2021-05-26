import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Torgamord"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Water"],

	evolveFrom: {
		fr: "Khélocrok"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Exosquelette"
		},

		effect: {
			fr: "Ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance)."
		}
	}],

	attacks: [{
		name: {
			fr: "Coud’Krâne"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card