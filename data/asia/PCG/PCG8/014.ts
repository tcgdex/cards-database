import { Card } from "models/database/card"
import Set from "../PCG8"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ルディコロ（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [272],
	hp: 100,
	types: ["Fire"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "熱心",
			},
			effect: {
				'ja-jp': "対戦相手がPokã©Mon-Exをプレイしている場合、Ludicoloのそれぞれの攻撃は、Pokã©Monに30件のダメージを与えます。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Colorless"],
			name: {
				'ja-jp': "ノックオフ",
			},
			effect: {
				'ja-jp': "対戦相手の手から1枚のカードを探して廃棄せずに選択してください。",
			},
			damage: 30,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ファイアパンチ",
			},
			damage: 60,
		},
	],

	retreat: 2,

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
