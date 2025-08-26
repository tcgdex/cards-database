import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "金星-065/128",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "収穫賞金",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、ターンの一環としてアクティブなPokmonにエネルギーカードを添付すると、同時にそのポクモンに追加のエネルギーカードを添付することができます。金星が特別な状態の影響を受けている場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				ja: "ボディスラム",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
