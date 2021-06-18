import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Rillaboom",
		fr: "Gorythmic"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Rare",
	category: "Pokemon",
	hp: 180,
	types: ["Grass"],

	evolveFrom: {
		en: "Thwackey",
		fr: "Badabouin"
	},

	attacks: [{
		name: {
			en: "Wood Drain",
			fr: "Regain Sylvestre"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon."
		},

		damage: 60,
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			en: "Raging Repeated Strike",
			fr: "Frappes Effrénées"
		},

		effect: {
			en: "Discard any amount of Energy from your Pokémon. This attack does 30 more damage for each card you discarded in this way.",
			fr: "Défaussez autant d’Énergies que vous le voulez de vos Pokémon. Cette attaque inflige 30 dégâts supplémentaires pour chaque carte défaussée de cette façon."
		},

		damage: "120+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card