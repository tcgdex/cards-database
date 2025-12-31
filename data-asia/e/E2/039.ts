import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Elekid",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [239],
	hp: 30,
	types: ["Lightning"],
	stage: "Baby",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "エネルギーキック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、防御ポケモンに取り付けられたエネルギーカードを選択してください。相手はそのカードを他のポケモンの1つに移動します。 （相手がベンチポケモンを持っていない場合、この攻撃は何もしません。）",
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
