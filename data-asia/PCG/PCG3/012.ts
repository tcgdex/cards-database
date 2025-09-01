import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "ダークアーボック",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [24],
	hp: 90,
	types: ["Grass"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Grass"],
			name: {
				ja: "飲み込む",
			},
			effect: {
				ja: "ダメージを与える前に、防御するポケモンとダークアーボックの残りのHPを数えます。ディフェンディングポケモンの残りのHPがDark Arbokよりも少ない場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
			},
		},
		{
			cost: ["Colorless", "Colorless"],
			name: {
				ja: "余分な毒",
			},
			effect: {
				ja: "防御ポケモンがポケモンエクスである場合、防御するポケモンは眠って毒されています。",
			},
			damage: 30,
		},
	],

	retreat: 1,

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

export default card
