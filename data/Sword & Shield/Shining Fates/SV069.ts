import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Monthracite"
	},

	illustrator: "nagimiso",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Fighting"],

	evolveFrom: {
		fr: "Wagomine"
	},

	abilities: [{
		type: "Ability",

		name: {
			fr: "Générateur de Poix"
		},

		effect: {
			fr: "Une fois pendant votre tour, vous pouvez attacher une carte Énergie Fire, une carte Énergie Fighting, ou une de chaque de votre pile de défausse à vos Pokémon, comme il vous plaît."
		}
	}],

	attacks: [{
		name: {
			fr: "Avalanche Ardente"
		},

		damage: 130,
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card