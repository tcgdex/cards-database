import { Card } from "../../../interfaces"
import Set from "../PMCG5"

const card: Card = {
	set: Set,
	name: {
		ja: "ミスティのギャラドス",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [130],
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "反乱",
			},
			effect: {
				ja: "MistyのGyaradosが攻撃するたびに、2コインをひっくり返します。両方が尾である場合、その攻撃は何もしません。代わりに、MistyのGyaradosとすべてのカードをデッキに添付します。 <em>（MistyのGyaradosが混乱していても、このパワーは機能します。）</em>",
			},
		}],

	attacks: [
		{
			cost: ["Water", "Water", "Water", "Water"],
			name: {
				ja: "津波",
			},
			damage: 70,
		},
	],

	retreat: 3,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
