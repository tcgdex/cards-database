import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "金星",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [3],
	hp: 100,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "収穫賞金",
			},
			effect: {
				ja: "ターン中（攻撃の前に）一度、ターンの一環としてアクティブなPokmonにエネルギーカードを添付すると、そのPokmonに追加のエネルギーカードを同時に添付することができます。金星が特別な状態の影響を受けている場合、この力は使用できません。",
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
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			subtype: "unlimited",
		},
	],
};

export default card
