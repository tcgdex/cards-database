import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "クラビー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [98],
	hp: 50,
	types: ["Water"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Water"],
			name: {
				ja: "家族を呼びます",
			},
			effect: {
				ja: "Krabbyという名前の基本的なポケモンをデッキに検索し、ベンチに置いてください。その後、デッキをシャッフルします。 （ベンチがいっぱいの場合、この攻撃を使用できません。）",
			},

		},
		{
			cost: ["Water", "Colorless"],
			name: {
				ja: "Irongrip",
			},
			damage: 20,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
