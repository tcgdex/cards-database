import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "サマヨール",
		'zh-tw': "彷徨夜靈",
	},

	illustrator: "Kazuma Koda",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "体の 中は 空っぽ。 口を 開けると ブラックホールの ように なんでも 吸いこんでしまう。",
		'zh-tw': "身體內部是空的。只要一張開嘴就會像黑洞一樣吸入所有東西。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "あやしいひかり",
				'zh-tw': "奇異之光",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
		{
			name: {
				ja: "サイコパンチ",
				'zh-tw': "精神拳",
			},
			damage: 60,
			cost: ["Psychic", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586583,
				tcgplayer: 571320,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 578387,
			},
		},
	],

	evolveFrom: {
		ja: "ヨマワル",
	},

	retreat: 2,
	regulationMark: "D",
	rarity: "None",
	dexId: [356],
};

export default card;
