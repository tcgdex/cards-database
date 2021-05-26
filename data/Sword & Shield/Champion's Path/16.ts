import { Card } from '../../../interfaces'
import Set from '../Champion\'s Path'

const card: Card = {
	name: {
		en: "Gardevoir V",
		fr: "Gardevoir V"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 210,

	types: [
		"Psychic",
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	attacks: [{
		name: {
			en: "Magical Shot",
			fr: "Coup Magique"
		},

		damage: 30,
		cost: ["Psychic"]
	}, {
		name: {
			en: "Swelling Pulse",
			fr: "Pulsation Grandissante"
		},

		effect: {
			en: "If this Pokémon was healed during this turn, this attack does 80 more damage.",
			fr: "Si ce Pokémon a été soigné pendant ce tour, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "120+",
		cost: ["Psychic", "Psychic", "Colorless"]
	}]
}

export default card
