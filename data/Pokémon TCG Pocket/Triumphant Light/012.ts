import { Card } from "../../../interfaces"
import Set from "../Triumphant Light"

const card: Card = {
	set: Set,

	name: {
		en: "Houndoom"
	},

	illustrator: "Hajime Kusajima",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Fire"],

	evolveFrom: {
		en: "Houndour"
	},

	description: {
		en: "If you are burned by the flames it shoots from its<br />mouth, the pain will never go away."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Corner"
		},

		damage: 60,
		cost: ["Fire", "Colorless"],

		effect: {
			en: "During your opponent's next turn, the Defending Pokémon can't retreat."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 2
}

export default card