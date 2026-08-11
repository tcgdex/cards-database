import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "マクノシタ",
		'zh-tw': "幕下力士",
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 80,
	types: ["Fighting"],

	description: {
		ja: "強い マクノシタを 育てるために トレーナーたちが 伝統的に 作る ナベ料理が あるという。",
		'zh-tw': "據說為了培育強大的幕下力士， 訓練家們會製作一種 傳統的火鍋料理。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ねこだまし",
				'zh-tw': "擊掌奇襲",
			},
			damage: 20,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
				'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Psychic", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 651093,
				tcgplayer: 569877,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "Common",
	dexId: [296],
};

export default card;
