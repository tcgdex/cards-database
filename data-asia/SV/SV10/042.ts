import { Card } from "../../../interfaces";
import Set from "../SV10";

const card: Card = {
	set: Set,
	name: {
		ja: "ロケット団のミミッキュ",
		'zh-tw': "<火箭隊的>謎擬Ｑ",
		'zh-cn': "<火箭隊的>謎擬Ｑ",
	},

	illustrator: "DOM",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。",
		'zh-tw': "棲息在陽光照射不到的陰暗處。 在人們面前現身時會用 看似皮卡丘的布來隱藏全身。",
		'zh-cn': "棲息在陽光照射不到的陰暗處。 在人們面前現身時會用 看似皮卡丘的布來隱藏全身。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ほうせきごっこ",
				'zh-tw': "扮晶晶酒",
				'zh-cn': "扮晶晶酒",
			},
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトル場の「テラスタル」のポケモンが持つワザを1つ選び、このワザとして使う。",
				'zh-tw': "選擇1個對手的戰鬥場的「太晶」寶可夢持有的招式，作為這個招式使用。",
				'zh-cn': "選擇1個對手的戰鬥場的「太晶」寶可夢持有的招式，作為這個招式使用。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 821874,
				tcgplayer: 628683,
			},
		},
	],

	retreat: 0,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [778],
};

export default card;
