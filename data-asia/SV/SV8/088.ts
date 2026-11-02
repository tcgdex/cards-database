import { Card } from "../../../interfaces";
import Set from "../SV8";

const card: Card = {
	set: Set,
	name: {
		ja: "エリキテル",
		'zh-tw': "傘電蜥",
		'zh-cn': "傘電蜥",
	},

	illustrator: "miki kudo",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "頭の ひだを 広げ 太陽の 光で 発電すると パワフルな 電気技を 出せるようになる。",
		'zh-tw': "當牠張開頭部的褶邊 用太陽光發電，就能使出 威力強大的電屬性招式。",
		'zh-cn': "當牠張開頭部的褶邊 用太陽光發電，就能使出 威力強大的電屬性招式。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "プチボルト",
				'zh-tw': "小伏特",
				'zh-cn': "小伏特",
			},
			damage: 10,
			cost: ["Colorless"],
		},
		{
			name: {
				ja: "とつげき",
				'zh-tw': "突擊",
				'zh-cn': "突擊",
			},
			damage: 40,
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにも10ダメージ。",
				'zh-tw': "這隻寶可夢也受到10點傷害。",
				'zh-cn': "這隻寶可夢也受到10點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 793522,
				tcgplayer: 587668,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [694],
};

export default card;
