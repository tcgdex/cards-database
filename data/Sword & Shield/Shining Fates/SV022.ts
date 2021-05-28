import { Card } from '../../../interfaces'
import Set from '../Shining Fates'

const card: Card = {
	set: Set,

	name: {
		fr: "Suicune",
		en: "Suicune"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Ultra Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Water"],

	attacks: [{
		name: {
			fr: "Grosse Vague",
			en: "Wave Splash"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			fr: "Boucle Aurore",
			en: "Aurora Loop"
		},

		effect: {
			fr: "Ajoutez à votre main 2 Énergies Water attachées à ce Pokémon.",
			en: "Put 2 Water Energy attached to this Pokémon into your hand."
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "D"
}

export default card