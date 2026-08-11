import { Card } from "models/database/card"
import Set from "../PCG9"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドラゴナイトex（デルタ種）",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [149],
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				'ja-jp': "defen",
			},
			effect: {
				'ja-jp': "対戦相手は、対戦相手の次のターン中に手からトレーナーカード（サポーターカードを除く）をプレイできません。",
			},
			damage: 40,
		},
		{
			cost: ["Grass", "Grass", "Colorless", "Colorless"],
			name: {
				'ja-jp': "ドラゴン・ロア",
			},
			effect: {
				'ja-jp': "防御ポケモンに8つのダメージカウンターを置きます。この攻撃によってそのポケモンがノックアウトされる場合、相手のベンチ付きポケモンの防御ポケモンを好きなようにノックアウトするために必要ではないダメージカウンターを入れてください。",
			},
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
