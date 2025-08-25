import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Togekiss"
	},

	illustrator: "sui",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],

	evolveFrom: {
		en: "Togetic"
	},

	description: {
		en: "These Pokémon are never seen anywhere near\nconflict or turmoil. In recent times, they've hardly\nbeen seen at all."
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Celestial Blessing"
		},

		effect: {
			en: "If any damage is done to this Pokémon by attacks, flip a coin. If heads, prevent that damage."
		}
	}],

	attacks: [{
		name: {
			en: "Magical Shot"
		},

		damage: 70,
		cost: ["Psychic", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card