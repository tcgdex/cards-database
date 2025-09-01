import {Card} from "../../../interfaces"
import Set from "../ADV3"

const card: Card = {
	set: Set,
	name: {
		ja: "馬",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [116],
	hp: 40,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "報復",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10倍のダメージ倍のダメージ数を馬にカウンターします。",
			},
		},
		{
			cost: ["Water"],
			name: {
				ja: "煙幕",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
