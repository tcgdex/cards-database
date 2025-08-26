import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ベルスプラウト",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [69],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "つる鞭",
			},
			damage: 10,
		},
		{
			cost: ["Grass"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "Bellsproutという名前の基本的なポケモンをデッキに検索し、ベンチに置きます。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
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
