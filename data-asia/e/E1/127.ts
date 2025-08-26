import { Card } from "../../../interfaces"
import Set from "../E1"

const card: Card = {
	set: Set,
	name: {
		ja: "タイラニタル-127/128",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [248],
	hp: 120,
	types: ["Darkness"],
	stage: "Stage2",

	abilities: [
		{
			name: {
				ja: "暗いオーラ",
			},
			effect: {
				ja: "Tyranitarに取り付けられたすべてのエネルギーは、通常のタイプではなくDarkness Energyです。",
			},
		}],

	attacks: [
		{
			cost: ["Darkness", "Darkness", "Darkness", "Darkness"],
			name: {
				ja: "スタンプ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は50ダメージに加えて10ダメージを与え、相手のベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
		},
	],

	retreat: 4,

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

export default card
