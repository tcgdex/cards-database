import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "Hitmonlee",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [106],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "スマッシュキック",
			},
			damage: 10,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ストレッチキック",
			},
			effect: {
				ja: "対戦相手がベンチポケモンを持っている場合は、1つを選択すると、この攻撃は30のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 2,

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
