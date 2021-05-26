import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Tapu Bulu",
		fr: "Tokotoro"
	},

	illustrator: "Ryota Murayama",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	attacks: [{
		name: {
			en: "Push Down",
			fr: "Recul"
		},

		effect: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif contre l’un de ses Pokémon de Banc."
		},

		damage: 20,
		cost: ["Grass"]
	}, {
		name: {
			en: "Nature’s Judgment",
			fr: "Jugement de la Nature"
		},

		effect: {
			en: "You may discard all Energy from this Pokémon. If you do, this attack does 80 more damage.",
			fr: "Vous pouvez défausser toute l’Énergie de ce Pokémon. Dans ce cas, cette attaque inflige 80 dégâts supplémentaires."
		},

		damage: "80+",
		cost: ["Grass", "Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card