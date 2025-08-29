import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "Brock's Vulpix（LV.10）",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [37],
	hp: 40,
	types: ["Fire"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Fire"],
			name: {
				ja: "炎",
			},
			damage: 20,
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "クイック攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
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
