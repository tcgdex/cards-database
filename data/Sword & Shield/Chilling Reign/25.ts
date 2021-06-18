import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Volcanion V",
		fr: "Volcanion V"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	attacks: [{
		name: {
			en: "Heat Blast",
			fr: "Explosion de Chaleur"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			en: "Dynamite Tackle",
			fr: "Plaquage Explosif"
		},

		effect: {
			en: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage.",
			fr: "Si ce Pokémon a au moins 10 marqueurs de dégâts, cette attaque inflige 150 dégâts supplémentaires."
		},

		damage: "100+",
		cost: ["Fire", "Fire", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E"
}

export default card