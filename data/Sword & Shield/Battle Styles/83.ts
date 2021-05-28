import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Falinks",
		fr: "Hexadron"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Fighting"],

	attacks: [{
		name: {
			en: "Rapid Strike Squad",
			fr: "Brigade à Mille Poings"
		},

		effect: {
			en: "This attack does 20 damage for each of your Rapid Strike Pokémon in play.",
			fr: "Cette attaque inflige 20 dégâts pour chacun de vos Pokémon Mille Poings en jeu."
		},

		damage: "20×",
		cost: ["Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card