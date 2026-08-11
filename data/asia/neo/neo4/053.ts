import { Card } from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
	set: Set,
	name: {
		ja: "v",
	},

	rarity: "Common",
	category: "Pokemon",
	dexId: [201],
	hp: 40,
	types: ["Psychic"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "消える[vanish]",
			},
			effect: {
				ja: "手から[v]をプレイすると、コインをひっくり返すことができます。頭の場合は、その名前（[v]以外の）が手にないポクモンの1を返します。 <em>（そのカードに添付されたすべてのカードを破棄します。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "隠された力",
			},
			damage: 10,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],
};

export default card
