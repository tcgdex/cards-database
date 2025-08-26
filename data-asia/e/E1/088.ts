import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Dugtrio",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [51],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "泥の平手打ち",
			},
			damage: 20,
		},
		{
			cost: ["Fighting", "Colorless", "Colorless"],
			name: {
				ja: "大きさ",
			},
			effect: {
				ja: "各ベンチポケモン（あなたと対戦相手）に10のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 40,
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
