import { Card } from "../../../interfaces"
import Set from "../Mega Rising"

const card: Card = {
	set: Set,

	name: {
		en: "Hypno"
	},

	illustrator: "Taiga Kasai",
	rarity: "One Shiny",
	category: "Pokemon",

	dexId: [97],
	hp: 100,
	types: ["Psychic"],

	evolveFrom: {
		en: "Drowzee"
	},

	description: {
		en: "When it locks eyes with an enemy, it will use\na mix of psi moves, such as Hypnosis and\nConfusion."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sleep Pendulum"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, your opponent's Active Pokémon is now Asleep."
		}
	}],

	attacks: [{
		name: {
			en: "Psypunch"
		},

		damage: 50,
		cost: ["Psychic", "Psychic", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "+20"
	}],

	retreat: 2,
	boosters: ["mega-gyarados"]
}

export default card