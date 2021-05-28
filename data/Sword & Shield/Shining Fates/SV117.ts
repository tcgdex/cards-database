import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Angoliath VMAX",
		en: "Grimmsnarl VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 330,
	types: ["Darkness"],

	evolveFrom: {
		fr: "Angoliath-V",
		en: "Grimmsnarl V"
	},

	attacks: [{
		name: {
			fr: "Perceuse G-Max",
			en: "G-Max Drill"
		},

		effect: {
			fr: "Cette attaque inflige 50 dégâts supplémentaires pour chaque Énergie Darkness supplémentaire attachée à ce Pokémon (en plus du coût de cette attaque). Vous ne pouvez pas ajouter plus de 100 dégâts de cette façon.",
			en: "This attack does 50 more damage for each extra Darkness Energy attached to this Pokémon (in addition to this attack’s cost). You can’t add more than 100 damage in this way."
		},

		damage: "170+",
		cost: ["Darkness", "Darkness", "Darkness"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card