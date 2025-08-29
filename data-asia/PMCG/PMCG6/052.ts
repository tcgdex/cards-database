import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		ja: "サブリナのジンクス",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [124],
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "手伝います",
			},
			effect: {
				ja: "対戦相手のポケモンを1つ選択します。そのポケモンから数のダメージカウンターを削除し、その多くのカードを描きます。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "ハグ",
			},
			effect: {
				ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に退却することはできません。",
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
