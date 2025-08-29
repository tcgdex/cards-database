import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "totodile",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [158],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "Leer",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは対戦相手の次のターン中にトトダイルを攻撃することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
			},
		},
		{
			cost: ["Water"],
			name: {
				ja: "フューリースワイプ",
			},
			effect: {
				ja: "3コインをフリップします。この攻撃は、ヘッド数の10倍のダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
