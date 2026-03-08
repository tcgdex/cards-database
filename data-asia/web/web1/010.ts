import { Card } from "../../../interfaces"
import Set from "../web1"

const card: Card = {
	set: Set,
	name: {
		ja: "マリル",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [183],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water"],
			name: {
				ja: "ウォーターガン",
			},
			effect: {
				ja: "20ダメージに加えて、マリルに付随する各エネルギーに対してさらに10ダメージを与えますが、この攻撃のエネルギーコストの支払いには使用されません。この方法で20以上のダメージを追加することはできません。",
			},
		},
	],

	retreat: 1,

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
