import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス",
		'zh-tw': "拉魯拉絲",
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "赤いツノで 人や ポケモンの 温かな 気持ちを キャッチすると 全身が ほのかに 熱くなる。",
		'zh-tw': "用紅色的角感知到人和寶可夢的溫情後，全身也會變得有點暖暖的。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あやしいひかり",
				'zh-tw': "奇異之光",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586577,
				tcgplayer: 571314,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578382,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "None",
	dexId: [280],
};

export default card;
