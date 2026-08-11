import { Card } from "models/database/card"
import Set from "../PMCG4"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "わるいヤドラン",
	},

	illustrator: "Mitsuhiro Arita",
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
				'ja-jp': "リールイン",
			},
			effect: {
				'ja-jp': "このポケモンを手から演奏してポケモンを1つ進化させると、捨てられた山から3ポクモンを手に入れることができます。",
			},
		}],

	attacks: [
		{
			cost: ["Psychic", "Psychic"],
			name: {
				'ja-jp': "気まぐれな攻撃",
			},
			effect: {
				'ja-jp': "コインをひっくり返します。尾の場合、この攻撃は何もしません。",
			},
			damage: 40,
		},
	],

	retreat: 2,

	variants: [
		{
			type: "holo",
			thirdParty: {
				tcgplayer: 575752
			},
		},
	],
};

export default card
