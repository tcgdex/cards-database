import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ブラストワーズ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [9],
	hp: 110,
	types: ["Fighting"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "シールドベール",
			},
			effect: {
				'ja-jp': "あなたのアクティブなポカモンにはそれぞれ弱点はありません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				'ja-jp': "激怒した線形攻撃",
			},
			effect: {
				'ja-jp': "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対する爆風の各ダメージカウンターに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				'ja-jp': "頭蓋骨バッシュ",
			},
			damage: 60,
		},
	],

	retreat: 3,

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
