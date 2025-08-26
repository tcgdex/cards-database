import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのおしっこ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [110],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "自発的な爆発",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与え、コガのweezingはそれ自体に30のダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "有毒な雲",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。各プレイヤーのターン後（すでに毒されていたとしても）、20回ではなく20回の毒ダメージがかかります。",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
