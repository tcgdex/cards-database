import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "マンキー",
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
				ja: "相手のデッキをシャッフルします。",
			},
		},
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
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
