import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのペルシャ語",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [53],
	hp: 60,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "上司に電話してください",
			},
			effect: {
				ja: "Giovanniのペルシャ語を手からプレイしたら、18という名前のトレーナーカードを検索し、相手に見せて、手に渡すことができます。その後、デッキをシャッフルします。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "待ち伏せ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
