import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Crèmy",
		en: "Milcery"
	},

	illustrator: "Motofumi Fujiwara",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],

	attacks: [{
		name: {
			fr: "Aromathérapie",
			en: "Aromatherapy"
		},

		effect: {
			fr: "Soignez 10 dégâts de chacun de vos Pokémon.",
			en: "Heal 10 damage from each of your Pokémon."
		},

		cost: ["Colorless"]
	}, {
		name: {
			fr: "Charge",
			en: "Tackle"
		},

		damage: 20,
		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card