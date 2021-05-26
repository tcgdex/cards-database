import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Dolman"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],

	attacks: [{
		name: {
			fr: "Ultimawashi"
		},

		damage: 80,
		cost: ["Fighting", "Colorless", "Colorless"]
	}, {
		name: {
			fr: "Étau Puissant"
		},

		effect: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 60 dégâts supplémentaires."
		},

		damage: "120+",
		cost: ["Fighting", "Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4
}

export default card