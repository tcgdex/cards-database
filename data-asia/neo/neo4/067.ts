import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いエスペオン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [196],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ガウジ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Psychic", "Colorless", "Colorless"],
			name: {
				ja: "psysplash",
			},
			effect: {
				ja: "そのポケモンに取り付けられた各エネルギーカードに対して、対戦相手の各ポケモンに10ダメージを与えます。衰弱と抵抗を適用しないでください。",
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
