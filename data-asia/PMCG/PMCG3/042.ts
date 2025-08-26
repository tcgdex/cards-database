import { Card } from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
	set: Set,
	name: {
		ja: "同上",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [132],
	hp: 50,
	types: ["Colorless"],
	stage: "Basic",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "変身",
			},
			effect: {
				ja: "DittoがアクティブなPokmonである場合、それが型、ヒットポイント、脱力感などを含む防御ポクモンと同じカードであるかのように扱います。同上は、他のポクモンのコピーではありません。",
			},
		}],

	attacks: [],

	retreat: 1,

	variants: [
		{
			type: "holo",
		},
	],
};

export default card
