import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "Dugtrio",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [51],
	hp: 70,
	types: ["Fighting"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Fighting", "Fighting", "Colorless"],
			name: {
				ja: "スラッシュ",
			},
			damage: 40,
		},
		{
			cost: ["Fighting", "Fighting", "Fighting", "Fighting"],
			name: {
				ja: "地震",
			},
			effect: {
				ja: "あなた自身のベンチ付きポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 70,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/19.ts"
		}
	]
};

export default card
