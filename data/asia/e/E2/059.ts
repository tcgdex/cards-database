import { Card } from "../../../interfaces"
import Set from "../E2"

const card: Card = {
	set: Set,
	name: {
		ja: "ポリゴン",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [137],
	hp: 40,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "データソート",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、廃棄パイルからトレーナーカードを選択し、対戦相手に見せてから、デッキにシャッフルします。",
			},
		},
		{
			cost: ["Colorless"],
			name: {
				ja: "ペック",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
		{
			type: "normal",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};

export default card
