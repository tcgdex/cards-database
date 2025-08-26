import {Card} from "../../../interfaces"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		ja: "暗いスローブロ",
	},

	rarity: "Holo Rare",
	category: "Pokemon",
	dexId: [80],
	hp: 60,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [
		{
			type: "Pokemon Power",
			name: {
				ja: "リールイン",
			},
			effect: {
				ja: "このポケモンを手から演奏してポケモンを1つ進化させると、捨てられた山から3ポクモンを手に入れることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				ja: "気まぐれな攻撃",
			},
			effect: {
				ja: "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 40,
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
