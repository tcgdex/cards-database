import { Card } from "../../../interfaces";
import Set from "../S10P";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ オオニューラV",
		'zh-tw': "洗翠 大狃拉V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 190,
	types: ["Darkness"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "どくのツメ",
				'zh-tw': "毒之爪",
			},
			cost: [],
			effect: {
				ja: "相手のバトルポケモンをどくにする。",
				'zh-tw': "將對手的戰鬥寶可夢【中毒】。",
			},
		},
		{
			name: {
				ja: "フェイタルクロー",
				'zh-tw': "剋命爪",
			},
			damage: "80×",
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンが受けている特殊状態の数×80ダメージ。",
				'zh-tw': "造成對手的戰鬥寶可夢處於特殊狀態的數量×80點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 651103,
				tcgplayer: 569887,
			},
		},
	],

	retreat: 0,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [903],
};

export default card;
