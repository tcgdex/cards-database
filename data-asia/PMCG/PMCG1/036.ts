import { Card } from "../../../interfaces"
import Set from "../PMCG1"

const card: Card = {
	set: Set,
	name: {
		ja: "マグナイト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [81],
	hp: 40,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Lightning"],
			name: {
				ja: "サンダーウェーブ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Lightning", "Colorless"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチポケモンに衰弱と抵抗を適用しないでください。）マグネミテはそれ自体に40のダメージを与えます。",
			},
			damage: 40,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			cardPath: "data/Base/Base Set/53.ts"
		}
	]
};

export default card
