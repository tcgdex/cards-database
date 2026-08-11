import { Card } from "models/database/card"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スターミー",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [121],
	hp: 70,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "レイを混乱させます",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防御ポケモンは混乱しています。",
			},
			damage: 10,
		},
		{
			cost: ["Psychic", "Psychic", "Colorless"],
			name: {
				'ja-jp': "コアストリーム",
			},
			effect: {
				'ja-jp': "無色以外のエネルギータイプを選択してください。この攻撃は、そのタイプのエネルギーカードが添付された任意のエネルギーカードを備えた各相手のポケモンに20のダメージを与えます。衰弱と抵抗を適用しないでください。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
