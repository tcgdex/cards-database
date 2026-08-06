import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラV",
		'zh-tw': "水晶燈火靈V",
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Fire"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "あやしいひかり",
				'zh-tw': "奇異之光",
			},
			cost: ["Fire"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
			},
		},
		{
			name: {
				ja: "ポルターガイスト",
				'zh-tw': "靈騷",
			},
			damage: "40×",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるトレーナーズの枚数×40ダメージ。",
				'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×40點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575569,
				tcgplayer: 569515,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Double rare",
	dexId: [609],
};

export default card;
