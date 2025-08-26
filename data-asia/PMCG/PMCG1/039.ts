import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "マグネトン",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [82],
	hp: 60,
	types: ["Lightning"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "サンダーウェーブ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 30,
		},
		{
			cost: ["Lightning", "Lightning", "Colorless", "Colorless"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "各プレイヤーのベンチで各ポケモンに20のダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）マグネトンはそれ自体に80のダメージを与えます。",
			},
			damage: 80,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
