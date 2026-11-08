import { Card } from "models/database/card"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "アリアドス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [168],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "スパイダーウェブ",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。頭の場合、防衛ポケモンは退却できません。 （ポケモンがこの効果を終了するというベンチまたは進化。）",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				'ja-jp': "毒の噛み込み",
			},
			effect: {
				'ja-jp': "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいアリアドから多くのダメージカウンターを除去します（最も近い10に丸められます）。 Ariadosがそれよりも少ないダメージカウンターを持っている場合、それらすべてを削除します。",
			},
			damage: 20,
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
