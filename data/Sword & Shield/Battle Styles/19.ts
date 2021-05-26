import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Flapple VMAX",
		fr: "Pomdrapi VMAX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Rare",
	category: "Pokemon",
	hp: 320,
	types: ["Grass"],

	evolveFrom: {
		en: "Flapple V",
		fr: "Pomdrapi-V"
	},

	attacks: [{
		name: {
			en: "G-Max Rolling",
			fr: "Roulade G-Max"
		},

		effect: {
			en: "This attack does 10 less damage for each damage counter on this Pokémon.",
			fr: "Cette attaque inflige 10 dégâts de moins pour chaque marqueur de dégâts sur ce Pokémon."
		},

		damage: "250-",
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card