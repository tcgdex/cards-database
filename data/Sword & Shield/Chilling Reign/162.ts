import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		fr: "Volcanion V",
		en: "Volcanion V"
	},

	illustrator: "Eske Yoshinob",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 220,
	types: ["Fire"],

	attacks: [{
		name: {
			fr: "Explosion de Chaleur",
			en: "Heat Blast"
		},

		damage: 50,
		cost: ["Fire", "Colorless"]
	}, {
		name: {
			fr: "Plaquage Explosif",
			en: "Dynamite Tackle"
		},

		effect: {
			fr: "Si ce Pokémon a au moins 10 marqueurs de dégâts, cette attaque inflige 150 dégâts supplémentaires.",
			en: "If this Pokémon has 10 or more damage counters on it, this attack does 150 more damage."
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