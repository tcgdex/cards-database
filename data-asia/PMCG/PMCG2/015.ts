import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "venomoth",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [49],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "シフト",
			},
			effect: {
				ja: "ターン中に（攻撃の前）</em> </em>、毒液のタイプを、無色以外のプレイ中の他のポクモンのタイプに変更することができます。 Venomothが眠っている、混乱し、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防御するポケモンは混乱し、毒されます。",
			},
			damage: 10,
		},
	],


	variants : [
		{
			type: "holo",
		},
	],
};

export default card
