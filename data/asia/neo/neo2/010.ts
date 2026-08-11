import { Card } from "models/database/card"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "beedrill",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [15],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "トリプルポイズン",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。対戦相手は、各プレイヤーのターン後に1つではなく、3つのダメージカウンターを置くようになりました（すでに毒されていたとしても）。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				'ja-jp': "ピンミサイル",
			},
			effect: {
				'ja-jp': "4コインをひっくり返します。この攻撃は、ヘッド数の20倍のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "holo",
		},
	],
};

export default card
