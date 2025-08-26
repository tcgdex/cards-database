import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "蝶-098/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [12],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "奇跡的なパウダー",
			},
			effect: {
				ja: "順番<em>（攻撃の前）</em>中に、アクティブなポケモンからすべての特別な条件を削除することができます。蝶が特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "スパイラルドレイン",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、蝶から2つのダメージカウンターを取り外します。",
			},
			damage: 40,
		},
	],


	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
