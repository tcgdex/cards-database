import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "グレイシア",
		'zh-tw': "冰伊布",
	},

	illustrator: "saino misaki",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],

	description: {
		ja: "体熱を 急低下させる 能力を 有す。 大気 凍らせ 宝石の如き 煌めく 細氷を 舞い躍らせる 現象 起こす。",
		'zh-tw': "擁有急速降低體熱的能力。 能凍結大氣，引發細碎冰晶 如同寶石般閃耀飛舞的現象。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "フロストウォール",
				'zh-tw': "冰霜堡壘",
			},
			damage: 30,
			cost: ["Water"],
			effect: {
				ja: "次の相手の番、このポケモンは進化ポケモンからワザのダメージを受けない。",
				'zh-tw': "在下個對手的回合，這隻寶可夢不會受到進化寶可夢招式的傷害。",
			},
		},
		{
			name: {
				ja: "アイスブラスト",
				'zh-tw': "冰之爆破",
			},
			damage: 120,
			cost: ["Water", "Water", "Colorless"],
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651080,
				tcgplayer: 569864,
			},
		},
	],

	evolveFrom: {
		ja: "イーブイ",
	},

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [471],
};

export default card;
