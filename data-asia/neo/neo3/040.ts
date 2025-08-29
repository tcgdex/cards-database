import { Card } from "../../../interfaces"
import Set from "../neo3"

const card: Card = {
	set: Set,
	name: {
		ja: "シャックル",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [213],
	hp: 40,
	types: ["Fighting"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "ハードシェル",
			},
			effect: {
				ja: "攻撃が（あなた自身を含む）<em> </em>がシャックル<em>（脱力感と抵抗を適用した後）に40以下のダメージを与えたとき、その損傷を10に減らします（攻撃の他の影響はまだ起こります。）",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "有毒な唾液",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
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
