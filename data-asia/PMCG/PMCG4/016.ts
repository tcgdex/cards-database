import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークフレアロン",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [136],
	hp: 50,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "ダークフレレオンの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
			},
		},
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "火で遊ぶ",
			},
			effect: {
				ja: "この攻撃を使用して、ダークフレアンに添付されている火エネルギーカードがある場合にのみ使用してください。コインをひっくり返します。ヘッドの場合、これらのエネルギーカードの1つを捨てて、この攻撃は30ダメージに20回のダメージを与えます。尾の場合、この攻撃は30のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
