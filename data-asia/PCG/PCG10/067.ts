import {Card} from "../../../interfaces"
import Set from "../PCG10"

const card: Card = {
	set: Set,
	name: {
		ja: "メタン",
	},


	category: "Pokemon",
	dexId: [375],
	hp: 80,
	types: ["Metal"],
	stage: "Stage1",

	abilities: [
		{
			name: {
				ja: "クリアボディ",
			},
			effect: {
				ja: "メタンは、特別な条件の影響を受けることはできません。",
			},
		}],

	attacks: [
		{
			cost: ["Metal", "Colorless"],
			name: {
				ja: "余分な彗星パンチ",
			},
			effect: {
				ja: "次のターン中に、追加の彗星パンチは30ダメージに加えて30ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			subtype: "unlimited",
		},
		{
			type: "normal",
			stamp: ["1st edition"],
		},
	],
};
