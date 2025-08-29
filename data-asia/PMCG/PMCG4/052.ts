import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークドラゴンエア",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [148],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "進化的光",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em>中に、デッキを検索して進化カードを検索できます。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。ダークドラゴンエアが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "テールストライク",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
