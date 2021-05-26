import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,

	name: {
		en: "Luxray",
		fr: "Luxray"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Common",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		en: "Luxio",
		fr: "Luxio"
	},

	attacks: [{
		name: {
			en: "Raid",
			fr: "Razzia Obscure"
		},

		effect: {
			en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage.",
			fr: "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires."
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1
}

export default card