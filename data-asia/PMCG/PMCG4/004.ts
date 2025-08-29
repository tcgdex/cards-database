import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "グリマー",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [88],
	hp: 40,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "毒ガス",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "粘着性の手",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与え、防御ポケモンが麻痺しています。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
