import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのマンキー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [56],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "いたずら",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、相手の捨てられた山からカードを選択し、デッキの上に置きます。",
			},
		},
		{
			cost: ["Fighting"],
			name: {
				ja: "フューリースワイプ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
