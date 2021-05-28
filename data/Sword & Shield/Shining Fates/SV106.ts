import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Gorythmic VMAX",
		en: "Rillaboom VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		fr: "Gorythmic-V",
		en: "Rillaboom V"
	},

	attacks: [{
		name: {
			fr: "Griffe",
			en: "Scratch"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			fr: "Battromax",
			en: "Max Beating"
		},

		effect: {
			fr: "Vous pouvez défausser jusqu’à 3 Énergies Grass de ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
			en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way."
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "D"
}

export default card