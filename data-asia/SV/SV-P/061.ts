import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼニガメ",
		'zh-tw': "哭哭面具",
	},

	illustrator: "Gemi",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],

	description: {
		ja: "危なくなると 甲羅に 手足を 引っこめて 身を 守りながら 口から 水を 吹き出している。",
		'zh-tw': "古代人的靈魂變成了寶可夢。 為了尋找認得自己長相的人 而在遺跡裡徘徊。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あわ",
				'zh-tw': "不祥之眼",
			},
			damage: 20,
			cost: ["Water", "Water"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "在對手的1隻寶可夢身上放置3個傷害指示物。",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 720941,
				tcgplayer: 587819,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [7],
};

export default card;
