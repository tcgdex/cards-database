import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗い暗闇",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [44],
	hp: 50,
	types: ["Grass"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "花粉の悪臭",
			},
			effect: {
				ja: "ターン中に（攻撃の前に）</em> </em>、コインをひっくり返すことができます。頭の場合、防御するポクモンは今混乱しています。尾の場合、アクティブなポクモンが混乱しています。暗い暗闇が眠ったり、混乱したり、麻痺している場合、この力は使用できません。",
			},
		}],

	attacks: [
		{
			cost: ["Grass", "Grass"],
			name: {
				ja: "毒パウダー",
			},
			effect: {
				ja: "防御ポケモンは現在中毒になっています。",
			},
			damage: 10,
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
