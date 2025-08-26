import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "Hypno -041/092",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [97],
	hp: 80,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "睡眠振り子",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、催眠がアクティブなポケモンである場合、防御するポケモンを眠らせることができます。 Hypnoが特別な状態の影響を受ける場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "スパイラルオーラ",
			},
			effect: {
				ja: "防御ポケモンがこの攻撃からのダメージによってノックアウトされていない場合、相手のベンチ付きポケモンの1つを選択し、防御ポケモンをそれで切り替えることができます。",
			},
			damage: 30,
		},
	],

	retreat: 1,

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
