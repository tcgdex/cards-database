import { Card } from "models/database/card"
import Set from "../PCG2"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "スターミー",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [121],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "コアガード",
			},
			effect: {
				'ja-jp': "スターミーに精神的なエネルギーが付着している限り、攻撃によってスターミーに与えられた損傷は10増加します（衰弱と抵抗を適用した後）。",
			},
		}],

	attacks: [
		{
			cost: ["Water"],
			name: {
				'ja-jp': "エネルギーフリップ",
			},
			effect: {
				'ja-jp': "対戦相手のベンチポケモンを1つ選択します。この攻撃は、そのポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）そのポケモンに取り付けられたエネルギーを、相手のポケモンの別のポケモンに移動できます。",
			},
		},
		{
			cost: ["Psychic"],
			name: {
				'ja-jp': "サイキックブーム",
			},
			effect: {
				'ja-jp': "ディフェンディングポケモンに付随する各エネルギーに対して、10ダメージに加えて10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

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
