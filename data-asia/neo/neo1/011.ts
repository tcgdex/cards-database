import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "アリアドス",
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
				ja: "スパイダーウェブ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは退却できません。 （ポケモンがこの効果を終了するというベンチまたは進化。）",
			},
		},
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "毒の噛み込み",
			},
			effect: {
				ja: "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいアリアドから多くのダメージカウンターを除去します（最も近い10に丸められます）。 Ariadosがそれよりも少ないダメージカウンターを持っている場合、それらすべてを削除します。",
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
