import { Card } from "../../../interfaces"
import Set from "../VS1"

const card: Card = {
	set: Set,
	name: {
		ja: "コガのクロバット",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [169],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "毒の噛み込み",
			},
			effect: {
				ja: "この攻撃が防御ポケモンを損傷すると、防御ポケモンが毒され、そのダメージの半分に等しいコガのクロバットから多くのダメージカウンターを除去します（最も近い10に丸められます）。 KogaのCrobatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 10,
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
