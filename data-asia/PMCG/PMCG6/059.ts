import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "ジョバンニのマチョーク",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [67],
	hp: 80,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting"],
			name: {
				ja: "危険な攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は防御ポケモンにダメージを与えません。ジョバンニのマチョークはそれ自体に100のダメージを与えます。",
			},
			damage: 60,
		},
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "ヘッドロック",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。尾の場合、この攻撃は20ダメージを与えます。",
			},
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
