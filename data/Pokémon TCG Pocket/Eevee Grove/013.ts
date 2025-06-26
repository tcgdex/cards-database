import { Card } from "../../../interfaces"
import Set from "../Eevee Grove"

const card: Card = {
	set: Set,

	name: {
		en: "Incineroar"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	evolveFrom: {
		en: "Torracat"
	},

	description: {
		en: "Although it's rough mannered and egotistical, it\nfinds beating down unworthy opponents boring.\nIt gets motivated for stronger opponents."
	},

	stage: "Stage2",

	attacks: [{
		name: {
			en: "Darkest Lariat"
		},

		damage: 100,
		cost: ["Fire", "Fire", "Colorless"],

		effect: {
			en: "Flip 2 coins. This attack does 100 damage for each heads."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 3
}

export default card