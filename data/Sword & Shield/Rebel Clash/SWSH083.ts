import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Alakazam V"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "None",
	category: "Pokemon",
	dexId: [65],
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Zen Spoon"
		},

		effect: {
			en: "Put 3 damage counters on your opponent's Pokémon in any way you like."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			en: "Mind Ruler"
		},

		effect: {
			en: "This attack does 30 damage for each card in your opponent's hand."
		},

		damage: "30×"
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1
}

export default card