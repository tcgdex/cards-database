import { Card } from "../../../interfaces";
import Set from "../S7D";

const card: Card = {
	set: Set,
	name: {
		ja: "ジヘッド",
		'zh-tw': "雙首暴龍",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 100,
	types: ["Dragon"],

	description: {
		ja: "１つの エサを ２つの 頭で 奪い合う。 誰とも 戦って いないのに いつも 傷だらけ。",
		'zh-tw': "２個頭會爭搶同一個食物。明明沒有去和別人戰鬥，卻總是遍體鱗傷。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "かみつく",
				'zh-tw': "咬住",
			},
			damage: 40,
			cost: ["Psychic", "Darkness"],
		},
		{
			name: {
				ja: "リューズヘッド",
				'zh-tw': "龍之頭擊",
			},
			damage: 100,
			cost: ["Psychic", "Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 571628,
				tcgplayer: 569366,
			},
		},
	],

	evolveFrom: {
		ja: "モノズ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Common",
	dexId: [634],
};

export default card;
