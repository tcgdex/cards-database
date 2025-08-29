import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [25],
	hp: 50,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "クイック攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて20ダメージを与えます。尾の場合、この攻撃は10ダメージを与えます。",
			},
		},
		{
			cost: ["Lightning", "Lightning", "Colorless"],
			name: {
				ja: "敏ility性",
			},
			effect: {
				ja: "コインをひっくり返します。頭が、相手の次のターン中に、ピカチュウに行われた損害を含む攻撃のすべての影響を防ぎます。",
			},
			damage: 20,
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
