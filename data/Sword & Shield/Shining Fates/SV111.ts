import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Lokhlass VMAX",
		en: "Lapras VMAX"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],

	evolveFrom: {
		fr: "Lokhlass-V",
		en: "Lapras V"
	},

	attacks: [{
		name: {
			fr: "Pompe G-Max",
			en: "G-Max Pump"
		},

		effect: {
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Water attachée à ce Pokémon.",
			en: "This attack does 30 more damage for each Water Energy attached to this Pokémon."
		},

		damage: "90+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card