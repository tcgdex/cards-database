import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Zubat",
		fr: "Nosferapti"
	},

	illustrator: "Shigenori Negishi",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 50,
	types: ["Darkness"],

	description: {
		en: "It emits ultrasonic waves from its mouth to check\nits surroundings. Even in tight caves, Zubat flies\naround with skill.",
		fr: "Il sonde les environs en émettant des ultrasons avec sa bouche, et peut ainsi se frayer un chemin même dans les grottes les plus étroites."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison"
		},

		damage: 10,
		cost: ["Darkness"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh"]
}

export default card