import { Card } from "../../../interfaces";
import Set from "../S6K";

const card: Card = {
	set: Set,
	name: {
		ja: "ドガース",
		'zh-tw': "瓦斯彈",
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "汚い 空気が ごちそう。 むかしの ガラル地方には いまより たくさんの ドガースが いたという。",
		'zh-tw': "污濁的空氣是牠的美味大餐。據說在昔日的伽勒爾地區曾經存在著更多的瓦斯彈。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スモッグ",
				'zh-tw': "濁霧",
			},
			damage: 20,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 560820,
				tcgplayer: 569272,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [109],
};

export default card;
