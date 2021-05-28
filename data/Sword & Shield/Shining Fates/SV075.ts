import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dolman",
		en: "Stonjourner"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Ultimawashi",
			en: "Mega Kick"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Étau Puissant",
			en: "Power Press"
		},

		effect: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires.",
			en: "If this Pokémon has at least 1 extra Energy attached (in addition to this attack’s cost), this attack does 60 more damage."
		},

		damage: "120+",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "D"
}

export default card