import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Musharna"
	},

	illustrator: "MAHOU",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],

	evolveFrom: {
		en: "Munna"
	},

	description: {
		en: "When dark mists emanate from its body, don't\nget too near. If you do, your nightmares will\nbecome reality."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Dream Dance"
		},

		damage: 60,
		cost: ["Psychic", "Colorless"],

		effect: {
			en: "Both Active Pokémon are now Asleep."
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 3
}

export default card