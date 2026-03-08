import { Card } from "../../../interfaces"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		ja: "ブラストワーズ（デルタ種）",
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
				ja: "シールドベール",
			},
			effect: {
				ja: "あなたのアクティブなポカモンにはそれぞれ弱点はありません。",
			},
		}],

	attacks: [
		{
			cost: ["Fighting", "Colorless"],
			name: {
				ja: "激怒した線形攻撃",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。この攻撃は、そのポケモンに対する爆風の各ダメージカウンターに対して10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Metal", "Colorless", "Colorless"],
			name: {
				ja: "頭蓋骨バッシュ",
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
