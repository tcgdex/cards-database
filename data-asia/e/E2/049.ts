import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ニドギング-049/092",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [34],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "地球の怒り",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、nidkingがアクティブなポクモンである場合、コインをひっくり返すことができます。頭の場合は、相手のベンチポクモンのそれぞれにダメージカウンターを置きます。ニドキングが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				ja: "巨大なホーン",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドの場合、この攻撃は50ダメージに加えて30ダメージを与えます。",
			},
		},
	],

	retreat: 3,

};

export default card
