import { Card } from "../../../interfaces"
import Set from "../Fantastical Parade"

const card: Card = {
	set: Set,

	name: {
		en: "Polteageist"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	evolveFrom: {
		en: "Sinistea"
	},

	description: {
		en: "These Pokémon multiply by creeping into teapots\nand pouring themselves into leftover tea."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Refreshing Tea"
		},

		effect: {
			en: "Once during your turn, when you play this Pokémon from your hand to evolve 1 of your Pokémon, you may have your opponent shuffle their hand into their deck. For each remaining point that your opponent needs to win, they draw a card."
		}
	}],

	attacks: [{
		name: {
			en: "Spooky Shot"
		},

		damage: 40,
		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 1
}

export default card