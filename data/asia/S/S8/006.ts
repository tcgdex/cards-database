import { Card } from "../../../interfaces";
import Set from "../S8";

const card: Card = {
	set: Set,
	name: {
		ja: "マラカッチ",
		'zh-tw': "沙鈴仙人掌",
	},

	illustrator: "0313",
	category: "Pokemon",
	hp: 110,
	types: ["Grass"],

	description: {
		ja: "１年に 一度 種を まく。 花の 種は 栄養満点で 砂漠の 貴重な 食料。",
		'zh-tw': "一年散播一次種子。花的種子營養十足，是沙漠中貴重的食糧。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "つつく",
				'zh-tw': "啄",
			},
			damage: 20,
			cost: ["Grass"],
		},
		{
			name: {
				ja: "ぽいぽいシェイク",
				'zh-tw': "丟丟搖擺",
			},
			damage: "50×",
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "自分の手札から「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×50ダメージ。",
				'zh-tw': "從自己的手牌將任意數量的「寶可夢道具」卡丟棄，造成其張數×50點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 575556,
				tcgplayer: 569507,
			},
		},
	],

	retreat: 2,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [556],
};

export default card;
