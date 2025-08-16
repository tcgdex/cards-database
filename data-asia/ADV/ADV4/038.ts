import {Card} from "../../../interfaces"
import Set from "../ADV4"

const card: Card = {
	set: Set,
	name: {
		ja: "Regice Ex",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [378],
	hp: 90,
	types: ["Water"],
	stage: "Basic",

	abilities: [
		{
			name: {
				ja: "クリスタルボディ",
			},
			effect: {
				ja: "攻撃ポケモンによって誘導Exに与えられた損傷を除く攻撃のすべての影響を防ぎます。",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Colorless"],
			name: {
				ja: "フリーズロック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、対戦相手は次のターン中に自分の手から防御ポケモンにエネルギーカードを取り付けることができません。",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
		{
			type: "holo",
			stamp: ["1st edition"],
		},
	],
};
