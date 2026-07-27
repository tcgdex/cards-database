import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ラプラス",
		'zh-tw': "拉普拉斯",
	},

	illustrator: "zig",
	category: "Pokemon",
	hp: 130,
	types: ["Water"],

	description: {
		ja: "賢く 心優しい ポケモン。 きれいな 歌声を 響かせながら 海の上を 泳いで いく。",
		'zh-tw': "頭腦聰慧，心地善良的寶可夢。會一邊以優美的聲音歌唱，一邊暢游在大海之上。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レイジングフリーズ",
				'zh-tw': "激狂冰凍",
			},
			damage: 110,
			cost: ["Water", "Water", "Colorless"],
			effect: {
				ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "若在上個對手的回合，自己的寶可夢因招式的傷害而【氣絕】了，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687739,
				tcgplayer: 571715,
			},
		},
	],

	retreat: 2,
	regulationMark: "F",
	rarity: "Illustration rare",
	dexId: [131],
};

export default card;
