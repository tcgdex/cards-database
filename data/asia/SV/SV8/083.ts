import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤルキモノ",
		'zh-tw': "過動猿",
		'zh-cn': "過動猿",
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "いつも 暴れているので すぐに お腹が 空いてしまうが 食事の ときも じっとして いられない。",
		'zh-tw': "由於無時無刻都在大鬧， 肚子馬上就會覺得餓， 但牠卻連吃飯時也靜不下來。",
		'zh-cn': "由於無時無刻都在大鬧， 肚子馬上就會覺得餓， 但牠卻連吃飯時也靜不下來。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "スラッシュクロー",
				'zh-tw': "利爪揮砍",
				'zh-cn': "利爪揮砍",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793517,
				tcgplayer: 587663,
			},
		},
	],

	evolveFrom: {
		ja: "ナマケロ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [288],
};

export default card;
