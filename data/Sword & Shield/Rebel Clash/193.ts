import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom VMAX",
		fr: "Gorythmic VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Grass"],

	evolveFrom: {
		en: "Rillaboom V",
		fr: "Gorythmic-V"
	},

	attacks: [{
		name: {
			en: "Scratch",
			fr: "Griffe"
		},

		damage: 50,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Max Beating",
			fr: "Battromax"
		},

		effect: {
			en: "You may discard up to 3 Grass Energy from this Pokémon. If you do, this attack does 50 more damage for each card you discarded in this way.",
			fr: "Vous pouvez défausser jusqu’à 3 Énergies Grass de ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires pour chaque carte défaussée de cette façon."
		},

		damage: "130+",
		cost: ["Grass", "Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card