import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Granbull",
		fr: "Granbull"
	},

	illustrator: "Suwama Chiaki",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [210],
	hp: 120,
	types: ["Psychic"],

	evolveFrom: {
		en: "Snubbull"
	},

	description: {
		en: "While it has powerful jaws, it doesn't care for\ndisputes, so it rarely has a chance to display\ntheir might.",
		fr: "Sa mâchoire est étonnamment puissante, mais comme il n'aime pas se battre, il n'a pas souvent l'occasion de s'en servir."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wild Tackle",
			fr: "Tacle Brutal"
		},

		damage: 100,
		cost: ["Psychic", "Psychic", "Colorless"],

		effect: {
			en: "This Pokémon also does 20 damage to itself.",
			fr: "Ce Pokémon s'inflige aussi 20 dégâts."
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["ho-oh", "lugia"]
}

export default card