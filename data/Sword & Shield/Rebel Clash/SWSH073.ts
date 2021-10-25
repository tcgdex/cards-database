import { Card } from '../../../interfaces'
import Set from '../Rebel Clash'

const card: Card = {
	set: Set,

	name: {
		en: "Sobble"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [816],
	hp: 60,
	types: ["Water"],

	description: {
		en: "When scared, this Pokémon cries. Its tears pack the chemical punch of 100 onions, and attacks won't be able to resist weeping."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Growl"
		},

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon's attacks do 20 less damage (before applying Weakness and Resistance)."
		}
	}, {
		cost: ["Water"],

		name: {
			en: "Rain Splash"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card