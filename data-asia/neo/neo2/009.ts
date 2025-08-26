import { Card } from "../../../interfaces"
import Set from "../neo2"

const card: Card = {
	set: Set,
	name: {
		ja: "蝶",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [12],
	hp: 80,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Grass", "Colorless"],
			name: {
				ja: "魔法のほこり",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは今、眠っている、混乱したり、麻痺したり、毒殺されたりします（あなたの選択）。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "ハイパーリバース",
			},
			effect: {
				ja: "ディフェンディングポケモンに取り付けられたエネルギー数を10回ダメージします。損傷を行った後、防御ポケモンに与えられたダメージの量に等しいバタフリーから多数のダメージカウンターを除去します（脱力感と抵抗を適用した後）。",
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
