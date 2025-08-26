import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "槍",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [21],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "ペック",
			},
			damage: 10,
		},
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "鏡の動き",
			},
			effect: {
				ja: "Spearowが最後のターンを攻撃された場合、Spearowに対するその攻撃の最終結果を防御ポケモンに行います。",
			},

		},
	],


	variants : [
		{
			type: "normal",
		},
	],
};

export default card
