import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Zarude",
		fr: "Zarude"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Pack Call",
			fr: "Chef de Meute"
		},

		effect: {
			en: "Search your deck for a Grass Pokémon, reveal it, and put it into your hand. If you go second and it’s your first turn, search for up to 3 Grass Pokémon instead of 1. Then, shuffle your deck.",
			fr: "Cherchez dans votre deck un Pokémon Grass, montrez-le, puis ajoutez-le à votre main. Si vous jouez en second et que c’est votre premier tour, cherchez jusqu’à 3 Pokémon Grass au lieu d’un. Mélangez ensuite votre deck."
		},

		cost: ["Grass"]
	}, {
		name: {
			en: "Repeated Whip",
			fr: "Fouet Répété"
		},

		effect: {
			en: "This attack does 20 more damage for each Grass Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Énergie Grass attachée à ce Pokémon."
		},

		damage: "60+",
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card