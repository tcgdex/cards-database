import {Card} from "../../../interfaces"
import Set from "../PCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "タンゲラ",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [114],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "つるのいじめ",
			},
			effect: {
				ja: "相手に見せずに賞品を見てください。賞品の1枚を選択し、デッキの一番上のカードを見ずにデッキの一番上のカードで切り替えます。デッキにカードがない場合、この攻撃は何もしません。",
			},
		},
		{
			cost: ["Grass"],
			name: {
				ja: "小刻み",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。尾の場合、防御ポケモンは現在毒されます。",
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
