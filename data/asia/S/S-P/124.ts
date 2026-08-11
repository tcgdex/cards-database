import { Card } from "../../../interfaces";
import Set from "../S-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "邪惡仙子伊布V",
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "つくる 電気が 強力な ピカチュウほど ほっぺの 袋は 軟らかく よく 伸びるぞ。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "でんきショック",
				'zh-tw': "魅惑之聲",
			},
			damage: 30,
			cost: ["Lightning", "Lightning"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 525305,
				tcgplayer: 597325,
			},
		},
	],

	retreat: 1,
	regulationMark: "D",
	rarity: "Promo",
	dexId: [25],
};

export default card;
