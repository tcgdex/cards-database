import { Card } from "models/database/card"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "軽い毒",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [49],
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				'ja-jp': "神秘的な翼",
			},
			effect: {
				'ja-jp': "対戦相手は、廃棄された山からベビーポケモン、基本的なポケモン、または進化カードを選択して、手に入れてください。いずれにせよ、あなたは同じことをするかもしれません。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				'ja-jp': "同期します",
			},
			effect: {
				'ja-jp': "軽いボノモトと防御ポケモンに異なる数のエネルギーカードが付いている場合、この攻撃は何もしません。",
			},
			damage: 40,
		},
	],


	variants: [
		{
			type: "normal",
		},
	],
};

export default card
