import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "シャンデラVMAX",
		'zh-tw': "水晶燈火靈VMAX",
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 320,
	types: ["Fire"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "じゅばくのかげろう",
				'zh-tw': "咒縛陽炎",
			},
			effect: {
				ja: "このポケモンがバトル場にいるかぎり、相手は手札から「ポケモンのどうぐ」を出してつけられない。",
				'zh-tw': "只要這隻寶可夢在戰鬥場上，對手無法從手牌使出並附上「寶可夢道具」。",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ダイポルターガイスト",
				'zh-tw': "極巨靈騷",
			},
			damage: "70×",
			cost: ["Fire", "Colorless"],
			effect: {
				ja: "相手の手札を見て、その中にあるトレーナーズの枚数×70ダメージ。",
				'zh-tw': "查看對手的手牌，造成其中訓練家卡的張數×70點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 575570,
				tcgplayer: 569516,
			},
		},
	],

	evolveFrom: {
		ja: "シャンデラV",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "Triple Rare",
	dexId: [609],
};

export default card;
