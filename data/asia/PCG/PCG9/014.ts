import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Latias ex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [380],
	hp: 100,
	types: ["Fire"],
	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "仲間のブースト",
			},
			effect: {
				'ja-jp': "ターン中（攻撃の前）に、手からラティアス、ラティオス、ラティオス、またはラティオスexに基本的なエネルギーカードを添付することができます。もしそうなら、あなたの順番は終わります。 Latias Exが特別な状態の影響を受けている場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				'ja-jp': "パワークラッシュ",
			},
			effect: {
				'ja-jp': "防御ポケモンがこの攻撃によってノックアウトされた場合、Latias Exに取り付けられた2つの火エネルギーを捨ててください。",
			},
			damage: 90,
		},
	],

	retreat: 2,

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
