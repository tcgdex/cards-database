import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowpoke"
	},

	illustrator: "sowsow",
	rarity: "None",
	category: "Pokemon",
	dexId: [79],
	hp: 70,
	types: ["Psychic"],

	description: {
		en: "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Everyone Laze Around"
		},

		effect: {
			en: "Heal 10 damage from each of your Pokémon."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			en: "Tail Whap"
		},

		damage: 30
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