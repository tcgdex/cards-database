import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Crobat ex",
		fr: "Nostenfer-ex"
	},

	illustrator: "PLANETA CG Works",
	rarity: "Four Diamond",
	category: "Pokemon",
	hp: 170,
	types: ["Darkness"],

	evolveFrom: {
		en: "Golbat"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Venomous Slash",
			fr: "Taillade Venimeuse"
		},

		damage: 70,
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