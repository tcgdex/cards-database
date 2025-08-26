import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "Rapidash",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [78],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "踏みつけ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は20ダメージに加えて10ダメージを与えます。尾の場合、この攻撃は20ダメージを与えます。",
			},

		},
		{
			cost: ["Fire", "Fire", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。ヘッドが、相手の次のターン中に、RapidAshに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 30,
		},
	],


	variants : [
		{
			type: "normal",
		},
	],
};

export default card
