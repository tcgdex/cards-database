import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "奇妙な",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [43],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "スタン胞子",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御ポケモンは麻痺しています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "芽",
			},
			effect: {
				ja: "Oddishという名前の基本的なポケモンをデッキで検索し、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},

		},
	],

	retreat: 1,

	variants : [
		{
			type: "normal",
		},
	],
};

export default card
