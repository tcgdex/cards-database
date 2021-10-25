import { Card } from '../../../interfaces'
import Set from '../Sword & Shield'

const card: Card = {
	set: Set,

	name: {
		en: "Shadow Rider Calyrex V"
	},

	illustrator: "5ban Graphics",
	rarity: "None",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Cloak in Shadows"
		},

		effect: {
			en: "Attach a Psychic Energy card from your discard pile to this Pokémon."
		}
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Hollow Binding"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2
}

export default card