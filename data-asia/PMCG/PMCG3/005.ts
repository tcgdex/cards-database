import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ゴルバット",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [42],
	hp: 60,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "翼攻撃",
			},
			damage: 30,
		},
		{
			cost: ["Grass", "Grass", "Colorless"],
			name: {
				ja: "リーチライフ",
			},
			effect: {
				ja: "防御ポケモンに与えられた損傷に等しいGolbatから多くのダメージカウンターを削除します（脱力感と抵抗を適用した後）。 Golbatのダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 20,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
