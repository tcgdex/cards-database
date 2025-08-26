import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのゴルダック",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [55],
	hp: 70,
	types: ["Water"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "ダメージシフト",
			},
			effect: {
				ja: "ポケモンのそれぞれからディフェンディングポケモンに1つのダメージカウンターを移動します。 （弱さや抵抗を適用しないでください。）",
			},
		},
		{
			cost: ["Water", "Colorless", "Colorless"],
			name: {
				ja: "水スプレー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
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
