import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのエスペオン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [196],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "サンフラッシュ",
			},
			effect: {
				ja: "防衛ポケモンが相手の次のターン中に攻撃を試みた場合、対戦相手はコインをひっくり返します。尾の場合、その攻撃は何もしません。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				ja: "Psywave",
			},
			effect: {
				ja: "この攻撃は、防御ポケモンのエネルギーカードの数を10回ダメージします。",
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
			stamp: ["1st-edition"],
		},
	],
};

export default card
