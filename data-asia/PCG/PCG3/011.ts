import { Card } from "../../../interfaces"
import Set from "../PCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "Treecko Star",
	},

	rarity: "Shiny rare",
	category: "Pokemon",
	dexId: [252],
	hp: 70,
	types: ["Grass"],
	stage: "Basic",

	attacks: [
		{
			cost: ["Colorless"],
			name: {
				ja: "取り組む",
			},
			damage: 10,
		},
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "バックバック",
			},
			effect: {
				ja: "対戦相手が1枚の賞カードしか残っていない場合、この攻撃は20ダメージに加えて50ダメージを与え、ディフェンディングポケモンが毒されます。",
			},
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
