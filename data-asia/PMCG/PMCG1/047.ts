import { Card } from "../../../interfaces"
import Set from "../PMCG1"
import InternationCard from "../../../data/Base/Base Set/29.ts";

const card: Card = {
	set: Set,
	name: {
		ja: "ハンター",
	},

	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [93],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	attacks: [
		{
			cost: ["Psychic"],
			name: {
				ja: "催眠",
			},
			effect: {
				ja: "防御ポケモンは今眠っています。",
			},

		},
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "夢の食べる人",
			},
			effect: {
				ja: "防御するポケモンが眠っていない限り、この攻撃を使用することはできません。",
			},
			damage: 50,
		},
	],

	retreat: 1,

	variants: [
		{
			type: "normal",
		},
	],

	related: [
		{
			type: "translation",
			card: InternationCard
		}
	]
};

export default card
