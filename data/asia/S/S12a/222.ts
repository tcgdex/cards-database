import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "デオキシスVMAX",
		'zh-tw': "代歐奇希斯VMAX",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 330,
	types: ["Psychic"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "プロテクトDNA",
				'zh-tw': "防護DNA",
			},
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のポケモン全員が、相手の「ポケモンVSTAR」から受けるワザのダメージは「-30」される。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有寶可夢受到對手的「寶可夢【VSTAR】」招式的傷害「-30」點。",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ダイドレイン",
				'zh-tw': "極巨吸取",
			},
			damage: 160,
			cost: ["Psychic", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンのHPを「30」回復する。",
				'zh-tw': "將這隻寶可夢恢復「30」HP。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687784,
				tcgplayer: 571760,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "デオキシスV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [386],
};

export default card;
