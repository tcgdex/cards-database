import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Noctowl"
	},

	illustrator: "Misa Tsutsui",
	rarity: "None",
	category: "Pokemon",
	dexId: [164],
	hp: 110,
	types: ["Colorless"],

	evolveFrom: {
		en: "Hoothoot"
	},

	description: {
		en: "When it needs to think, it rotates its head 180 degrees to sharpen its intellectual power."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Wing Attack"
		},

		damage: 40
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Carry Off"
		},

		effect: {
			en: "Choose 1 of your opponent's Benched Pokémon. They shuffle that Pokémon and all attached cards into their deck. Then, shuffle this Pokémon and all attached cards into your deck."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card