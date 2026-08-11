import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "蝶",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [12],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "奇跡的なパウダー",
			},
			effect: {
				ja: "ターン中（攻撃前）に、アクティブなポケモンからすべての特別な条件を削除できます。蝶が特別な状態の影響を受けている場合、このパワーは使用できません。",
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
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
