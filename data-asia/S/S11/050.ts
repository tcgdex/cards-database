import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ミミッキュ",
		'zh-tw': "謎擬Ｑ",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "怖がられないように ピカチュウに 似せた ボロ布を かぶっているが 余計に 不気味に なってしまった。",
		'zh-tw': "為了讓別人不要害怕自己，特意穿上了看似皮卡丘的破布， 結果卻變得更加令人毛骨悚然。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "まどわす",
				'zh-tw': "蠱惑",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
		{
			name: {
				ja: "ワーストギフト",
				'zh-tw': "極惡之禮",
			},
			damage: "10×",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手の場のポケモンにのっているダメカンの数×10ダメージ。",
				'zh-tw': "造成對手的場上寶可夢身上放置的傷害指示物的數量×10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667925,
				tcgplayer: 569981,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [778],
};

export default card;
