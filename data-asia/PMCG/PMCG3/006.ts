import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "おしっこ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [110],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "スモッグ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは現在毒されています。",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "セルフデストラクト",
			},
			effect: {
				ja: "各プレイヤーのベンチで各ポケモンに10ダメージを与えます。 （ベンチ付きポケモンに衰弱と抵抗を適用しないでください。）Weezingはそれ自体に60のダメージを与えます。",
			},
			damage: 60,
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
