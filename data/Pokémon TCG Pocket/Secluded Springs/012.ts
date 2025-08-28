import { Card } from "../../../interfaces"
import Set from "../Secluded Springs"

const card: Card = {
	set: Set,

	name: {
		en: "Talonflame"
	},

	illustrator: "5ban Graphics",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],

	evolveFrom: {
		en: "Fletchinder"
	},

	description: {
		en: "It has top-notch flying capabilities. It flies\naround easily, even while carrying prey\nthat weighs more than 220 lbs."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Searing Flame"
		},

		damage: 50,
		cost: ["Fire"],

		effect: {
			en: "Your opponent's Active Pokémon is now Burned."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1
}

export default card