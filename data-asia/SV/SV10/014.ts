import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ウインディ",
		'zh-tw': "風速狗",
		'zh-cn': "風速狗",
	},

	illustrator: "Nisota Niso",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。",
		'zh-tw': "根據過去的畫軸記載， 牠在草原上奔馳的姿態 擄獲了眾多人心。",
		'zh-cn': "根據過去的畫軸記載， 牠在草原上奔馳的姿態 擄獲了眾多人心。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ほのお",
				'zh-tw': "火焰",
				'zh-cn': "火焰",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "こらしめファング",
				'zh-tw': "懲治獠牙",
				'zh-cn': "懲治獠牙",
			},
			damage: "100+",
			cost: ["Fire", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが[D]ポケモンなら、100ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢為【惡】寶可夢，則增加100點傷害。",
				'zh-cn': "若對手的戰鬥寶可夢為【惡】寶可夢，則增加100點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821845,
				tcgplayer: 628655,
			},
		},
	],

	evolveFrom: {
		ja: "ガーディ",
	},

	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [59],
};

export default card;
