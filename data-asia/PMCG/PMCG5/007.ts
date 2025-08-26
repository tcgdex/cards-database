import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "エリカのブルバサウルス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1],
	hp: 50,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "睡眠の種",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "用事が走る",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合は、デッキを検索してトレーナーカードを検索できます。それを相手に見せて、あなたの手に入れてください。その後、デッキをシャッフルします。",
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
