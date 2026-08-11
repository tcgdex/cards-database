import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ペリッパー（デルタ種）",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [279],
	hp: 70,
	types: ["Lightning"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "デルタ輸送",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に、ペリッパーがベンチにある場合、1枚のベンチポカモンでカードにあるアクティブなポカモンの1つを切り替えることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Lightning", "Colorless"],
			name: {
				'ja-jp': "超音速",
			},
			effect: {
				'ja-jp': "防御ポケモンは今混乱しています。",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				'ja-jp': "翼攻撃",
			},
			damage: 40,
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
