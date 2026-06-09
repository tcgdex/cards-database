import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Golbat",
		fr: "Nosferalto"
	},

	illustrator: "kawayoo",
	rarity: "Two Diamond",
	category: "Pokemon",

	dexId: [42],
	hp: 70,
	types: ["Darkness"],

	evolveFrom: {
		en: "Zubat"
	},

	description: {
		en: "It loves to drink other creatures' blood. It's said\nthat if it finds others of its kind going hungry,\nit sometimes shares the blood it's gathered.",
		fr: "Le sang des êtres vivants est son péché mignon. On dit qu'il partage parfois ce précieux breuvage avec ses congénères affamés."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Venomous Fang",
			fr: "Croc-Poison"
		},

		damage: 20,
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