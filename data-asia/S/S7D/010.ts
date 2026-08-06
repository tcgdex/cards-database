import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "プリン",
		'zh-tw': "胖丁",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "歌う 歌は 棲む 地方によって 全然 違っている。 中には シャウトするような ものまで あるぞ。",
		'zh-tw': "隨著棲息的地方不同，所唱的歌也完全不一樣。甚至有一部分胖丁唱的歌聽起來就像是在大吼大叫。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "はたく",
				'zh-tw': "拍擊",
			},
			damage: 20,
			cost: ["Psychic"],
		},
		{
			name: {
				ja: "みんなでころがる",
				'zh-tw': "一同滾動",
			},
			damage: "20×",
			cost: ["Colorless", "Colorless"],
			effect: {
				ja: "自分のベンチの、ワザ「みんなでころがる」を持つポケモンの数×20ダメージ。",
				'zh-tw': "造成自己的備戰區的，持有「一同滾動」招式的寶可夢的數量×20點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571592,
				tcgplayer: 569333,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [39],
};

export default card;
