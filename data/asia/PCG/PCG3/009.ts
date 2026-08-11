import { Card } from "models/database/card"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ジャンプラフ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [189],
	hp: 90,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "バッファ",
			},
			effect: {
				'ja-jp': "ジャンプラフが相手の攻撃によってノックアウトされる場合、コインをひっくり返します。ヘッドの場合、ジャンプラフはノックアウトされず、その残りのHPは代わりに10になります。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				'ja-jp': "エネルギークラッシュ",
			},
			effect: {
				'ja-jp': "対戦相手のすべてのポケモンに取り付けられた各エネルギーに対して、10のダメージと10ダメージがさらに10ダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
			stamp: ["1st edition"],
		},
		{
			type: "holo",
			subtype: "unlimited",
		},
	],
};

export default card
