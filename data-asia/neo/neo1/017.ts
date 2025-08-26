import { Card } from "../../../interfaces"
import Set from "../neo1"

const card: Card = {
	set: Set,
	name: {
		ja: "ヘラクロス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [214],
	hp: 60,
	types: ["Grass"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "最後の打撃",
			},
			effect: {
				ja: "Heracrossの残りのHPが20以下の場合、Megahorn Attackのベースダメージ120ではなく120になる可能性があります。Heracrossが眠り、混乱し、または麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass", "Grass"],
			name: {
				ja: "メガホーン",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 60,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
