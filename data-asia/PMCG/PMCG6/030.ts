import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ブレインのラピダッシュ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [78],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "ファイヤーマネ",
			},
			damage: 20,
		},
		{
			cost: ["Fire", "Colorless", "Colorless"],
			name: {
				ja: "スタンプ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は30のダメージに加えて、ポケモンを防御するポケモンに10件以上ダメージを与え、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）尾の場合、この攻撃は（防御ポケモンに）30のダメージを与えます。",
			},
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
