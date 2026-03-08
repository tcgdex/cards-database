import { Card } from "../../../interfaces"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ノセパス",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [299],
	hp: 60,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "磁気反転",
			},
			effect: {
				ja: "ターン中（攻撃の前）に一度、NosepassがアクティブなPokã©Monである場合、コインをひっくり返すことができます。頭の場合、対戦相手のベンチポカモンの1つを防御するポカモンの1つに切り替えます。対戦相手は、防御するポカモンを選択して切り替えます。 Nosepassが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "シャープ",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
