import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "軽い毒",
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
				ja: "神秘的な翼",
			},
			effect: {
				ja: "対戦相手は、廃棄された山からベビーポケモン、基本的なポケモン、または進化カードを選択して、手に入れてください。いずれにせよ、あなたは同じことをするかもしれません。",
			},
		},
		{
			cost: ["Psychic", "Colorless"],
			name: {
				ja: "同期します",
			},
			effect: {
				ja: "軽いボノモトと防御ポケモンに異なる数のエネルギーカードが付いている場合、この攻撃は何もしません。",
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
