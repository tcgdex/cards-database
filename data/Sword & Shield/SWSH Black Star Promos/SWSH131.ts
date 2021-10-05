import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "5ban Graphics",
	category: "Pokemon",
	stage: "Basic",
	suffix: "V",

	name: {
		en: "Shadow Rider Calyrex V"
	},

	rarity: "None",
	hp: 210,
	types: ["Psychic"],

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
			en: "During your opponent’s next turn, the Defending Pokémon can’t retreat."
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

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card