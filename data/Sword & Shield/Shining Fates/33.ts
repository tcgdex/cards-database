import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Luxray",
		en: "Luxray"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 160,
	types: ["Lightning"],

	evolveFrom: {
		fr: "Luxio",
		en: "Luxio"
	},

	attacks: [{
		name: {
			fr: "Razzia Obscure",
			en: "Raid"
		},

		effect: {
			fr: "Si ce Pokémon a évolué de Luxio pendant ce tour, cette attaque inflige 100 dégâts supplémentaires.",
			en: "If this Pokémon evolved from Luxio during this turn, this attack does 100 more damage."
		},

		damage: "60+",
		cost: ["Lightning"]
	}, {
		name: {
			fr: "Éclair Frontal",
			en: "Head Bolt"
		},

		damage: 120,
		cost: ["Lightning", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card