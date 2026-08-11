import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "暗闇",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "かみそりの葉",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "ファウル臭",
			},
			effect: {
				ja: "防御するポケモンと暗闇の両方が混乱しています（ダメージを受けた後）。",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
