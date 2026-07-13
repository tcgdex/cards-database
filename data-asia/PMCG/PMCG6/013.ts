import { Card } from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
	set: Set,
	name: {
		// Giovanni's Nidorino
		ja: "サカキのニドリーノ",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [33],
	hp: 70,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass", "Colorless", "Colorless"],
			name: {
				ja: "レンド",
			},
			effect: {
				ja: "ディフェンディングポケモンがすでにダメージカウンターを持っている場合、この攻撃は20ダメージに加えて20ダメージを与えます。そうでない場合、この攻撃は20ダメージを与えます。",
			},
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
			thirdParty: {
				tcgplayer: 575375
			},
		},
	],
};

export default card
