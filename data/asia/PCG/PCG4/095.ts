import { Card } from "models/database/card"
import Set from "../PCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "Steelix Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [208],
	hp: 150,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "毒抵抗",
			},
			effect: {
				'ja-jp': "Steelix Exは毒されることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "金属電荷",
			},
			effect: {
				'ja-jp': "Steelix Exに1つのダメージカウンターを置きます。",
			},
			damage: 70,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
			name: {
				'ja-jp': "土砂崩れ",
			},
			effect: {
				'ja-jp': "Steelix Exに取り付けられた2つの戦闘エネルギーを捨て、相手のポケモンを1つ選択します。この攻撃は、そのポケモンに100のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 5,

	variants: [
		{
			type: "holo",
			subtype: "unlimited",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};

export default card
