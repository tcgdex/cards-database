import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いスローキング",
	},

	rarity: "Rare",
	category: "Pokemon",
	dexId: [199],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "unning",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合は、相手のデッキの一番上のカードを見てください。その後、相手にデッキをシャッフルさせることがあります。暗いスローキングが眠っている、混乱し、麻痺している場合、このパワーは使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "マインドショック",
			},
			effect: {
				ja: "この攻撃に弱さや抵抗を適用しないでください。",
			},
			damage: 30,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
