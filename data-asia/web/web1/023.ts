import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "アルカニン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [59],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "降ろす",
			},
			effect: {
				ja: "アルカニンはそれ自体に20の損傷を与えます。",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
