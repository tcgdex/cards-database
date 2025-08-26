import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "フォークナーはトイッチです",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [176],
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "癒しのタッチ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、ベンチ付きポケモンを1つ選択し、そこから3つのダメージカウンターを削除します。次に、そのポケモンでフォークナーをトジックに切り替えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、対戦相手の次のターン中にフォークナーのTogeticに対して行われたダメージを含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
