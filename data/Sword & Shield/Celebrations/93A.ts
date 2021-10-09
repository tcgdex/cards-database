import { Card } from '../../../interfaces'
import Set from '../Celebrations'

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir ex"
	},

	illustrator: "Masahiko Ishii",
	rarity: "None",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Poke-POWER",

		name: {
			en: "Imprison"
		},

		effect: {
			en: "When a Pokémon-ex has been knocked out, your opponent takes 2 Prize cards."
		}
	}],

	attacks: [{
		name: {
			en: "Flame Ball"
		},

		effect: {
			en: "You may move a Fire Energy card attached to Gardevoir ex to 1 of your Benched Pokémon."
		},

		damage: 80,
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: ""
	}],

	retreat: 2
}

export default card