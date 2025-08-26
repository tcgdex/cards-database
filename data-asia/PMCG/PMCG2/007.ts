import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "蝶",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [12],
	hp: 70,
	types: ["Grass"],
	stage: "Stage2",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "旋風",
			},
			effect: {
				ja: "対戦相手は、ベンチ付きポケモンの1つで防御ポケモンを切り替えます。 （ポケモンを切り替える前にダメージを与えます。）",
			},
			damage: 20,
		},
		{
			cost: ["Grass", "Grass", "Grass", "Grass"],
			name: {
				ja: "メガドレイン",
			},
			effect: {
				ja: "防御ポケモンに与えられたダメージの半分に等しいバタフリーから多数のダメージカウンターを削除します（脱力と抵抗を適用した後）（最も近い10に丸められています）。蝶のダメージカウンターがそれよりも少ない場合は、それらすべてを削除します。",
			},
			damage: 40,
		},
	],


	variants : [
		{
			type: "normal",
		},
	],
};

export default card
