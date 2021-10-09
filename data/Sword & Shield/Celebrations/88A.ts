import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Mew ex"
	},

	illustrator: "Ryo Ueda",
	rarity: "None",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Poke-BODY",

		name: {
			en: "Versatile"
		},

		effect: {
			en: "When a Pokémon-ex has been knocked out, your opponent takes 2 Prize cards."
		}
	}],

	attacks: [{
		name: {
			en: "Power Move"
		},

		effect: {
			en: "Search your deck for an Energy card and attach it to Mew ex. Shuffle your deck afterward. Then, you may switch Mew ex with 1 of your Benched Pokémon."
		},

		cost: ["Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: ""
	}],

	retreat: 1
}

export default card