import { Card } from "../../../interfaces"
import Set from "../PCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サンドシュー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [27],
	hp: 50,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "下を掘ります",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。この攻撃の損傷は、脱力感や抵抗の影響を受けません。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "傷",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
