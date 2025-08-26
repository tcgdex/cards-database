import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "articuno",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [144],
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water", "Water", "Water"],
			name: {
				ja: "凍結します",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、相手のアクティブなポケモンが麻痺しています。",
			},
			damage: 30,
		},
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: {
				ja: "ブリザード",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は、相手のベンチポケモンのそれぞれに10ダメージを与えます。尾の場合、この攻撃はベンチポケモンのそれぞれに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）",
			},
			damage: 50,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
