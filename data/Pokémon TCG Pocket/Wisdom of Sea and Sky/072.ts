import { Card } from "../../../interfaces"
import Set from "../Wisdom of Sea and Sky"

const card: Card = {
	set: Set,

	name: {
		en: "Emolga",
		fr: "Emolga"
	},

	illustrator: "Saya Tsuruta",
	rarity: "One Diamond",
	category: "Pokemon",

	dexId: [587],
	hp: 70,
	types: ["Lightning"],

	description: {
		en: "As Emolga flutters through the air, it crackles\nwith electricity. This Pokémon is cute, but it can\ncause a lot of trouble.",
		fr: "Il virevolte dans le ciel en libérant des gerbes d'électricité. Son vol est gracieux, mais peut s'avérer dangereux."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Raging Thunder",
			fr: "Tonnerre Déchaîné"
		},

		damage: 40,
		cost: ["Lightning"],

		effect: {
			en: "This attack also does 10 damage to 1 of your Benched Pokémon.",
			fr: "Cette attaque inflige aussi 10 dégâts à un de vos Pokémon de Banc."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	boosters: ["ho-oh", "lugia"]
}

export default card