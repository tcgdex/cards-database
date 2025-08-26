import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ブロックのニネタール",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [38],
	hp: 70,
	types: ["Fire"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "Shapeshift",
			},
			effect: {
				ja: "順番<em>（攻撃の前に）</em> </em>になったら、手からブロックのニネタールに進化カードを添付することができます。 （これは、進化するブロックのnineTalesとしてカウントされません。）BrockのNineTalesを代わりにPokmonであるかのように扱います。そのポクモンのポクモンの力を進化させたり、委ねたり、使用したりすることはできません。ターン中、ブロックのニネタールに取り付けられた進化カードを破棄することができます。ブロックのニネタールが眠っている、混乱し、麻痺している場合、このパワーは使用できません。ブロックのニネタールが眠り、混乱、または麻痺した場合、それに取り付けられたすべての進化カードを破棄します。",
			},
		}],

	attacks: [
		{
			cost: ["Fire", "Fire"],
			name: {
				ja: "will-o'-the-wisp",
			},
			damage: 30,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
