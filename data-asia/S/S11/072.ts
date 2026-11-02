import { Card } from "../../../interfaces";
import Set from "../S11";

const card: Card = {
	set: Set,
	name: {
		ja: "ドヒドイデ",
		'zh-tw': "超壞星",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "ガラル地方の 冷たい 水温に 耐えるため 脚で ドームを つくり 内部を 体温で 温める。",
		'zh-tw': "為了能承受住伽勒爾地區冰涼的水溫，牠用腳搭起圓頂， 藉助體溫保持內部的溫暖。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ベノムショック",
				'zh-tw': "毒液衝擊",
			},
			damage: "10+",
			cost: ["Darkness"],
			effect: {
				ja: "相手のバトルポケモンがどくなら、120ダメージ追加。",
				'zh-tw': "若對手的戰鬥寶可夢【中毒】，則增加120點傷害。",
			},
		},
		{
			name: {
				ja: "とげショット",
				'zh-tw': "尖刺射擊",
			},
			damage: 90,
			cost: ["Darkness", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 667947,
				tcgplayer: 570003,
			},
		},
	],

	evolveFrom: {
		ja: "ヒドイデ",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [748],
};

export default card;
