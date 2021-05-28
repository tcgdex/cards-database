import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Corvaillus",
		en: "Corviknight"
	},

	illustrator: "kirisAki",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 170,
	types: ["Metal"],

	evolveFrom: {
		fr: "Bleuseille",
		en: "Corvisquire"
	},

	attacks: [{
		name: {
			fr: "Picpic",
			en: "Peck"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Ailes de Fer",
			en: "Iron Wings"
		},

		effect: {
			fr: "Vous pouvez défausser 2 Énergies attachées à ce Pokémon. Dans ce cas, pendant le prochain tour de votre adversaire, ce Pokémon subit 100 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
			en: "You may discard 2 Energy from this Pokémon. If you do, during your opponent’s next turn, this Pokémon takes 100 less damage from attacks (after applying Weakness and Resistance)."
		},

		damage: 130,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card