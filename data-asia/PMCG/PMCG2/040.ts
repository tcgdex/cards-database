import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
	set: Set,
	name: {
		ja: "ドドリオ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [85],
	hp: 70,
	types: ["Colorless"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "リトリートエイド",
			},
			effect: {
				ja: "Dodrioがベンチにある限り、アクティブなポケモンを後退させるために{{e}}を支払います。",
			},
		}],

	attacks: [
		{
			cost: ["Colorless", "Colorless", "Colorless"],
			name: {
				ja: "怒り",
			},
			effect: {
				ja: "Dodrioの各ダメージカウンターで10ダメージと10ダメージをさらに10回します。",
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
