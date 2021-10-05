import { Card } from '../../../interfaces'
import Set from '../SWSH Black Star Promos'

const card: Card = {
	set: Set,
	illustrator: "sowsow",
	category: "Pokemon",

	description: {
		en: "Because Galarian Slowpoke eat the seeds of a plant that grows only in Galar, their tails have developed a spicy flavor."
	},

	stage: "Basic",

	name: {
		en: "Galarian Slowpoke"
	},

	rarity: "None",
	dexId: [79],
	hp: 70,
	types: ["Psychic"],

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

	retreat: 2,

	variants: {
		normal: false,
		reverse: false,
		holo: true,
		firstEdition: false
	}
}

export default card