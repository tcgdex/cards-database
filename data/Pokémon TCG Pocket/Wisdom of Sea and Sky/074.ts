import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Slowking"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Slowpoke"
	},

	description: {
		en: "When its head was bitten, toxins entered Slowpoke's\nhead and unlocked an extraordinary power."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Psychic"
		},

		damage: 10,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "This attack does 30 more damage for each Energy attached to your opponent's Active Pokémon."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2
}

export default card