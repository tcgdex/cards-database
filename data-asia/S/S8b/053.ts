import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼクロム",
		'zh-tw': "捷克羅姆",
	},

	illustrator: "hatachu",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "しっぽの 内部が モーターのように 回ると 何本もの 稲妻が 発生して 周囲を つらぬく。",
		'zh-tw': "當尾巴的內部像馬達那樣旋轉起來，就能製造出好幾道閃電，穿透周圍的一切。",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 30,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ワイルドショック",
				'zh-tw': "狂野衝擊",
			},
			damage: 130,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンにも60ダメージ。相手のバトルポケモンをマヒにする。",
				'zh-tw': "這隻寶可夢也受到60點傷害。將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586569,
				tcgplayer: 571306,
			},
		},
	],

	retreat: 3,
	regulationMark: "D",
	rarity: "None",
	dexId: [644],
};

export default card;
