import { Card } from "../../../interfaces";
import Set from "../S8b";

const card: Card = {
	set: Set,
	name: {
		ja: "いちげきウーラオス",
		'zh-tw': "一擊武道熊師",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],

	description: {
		ja: "遠い 地方の 山岳地帯で 暮らす。 断崖絶壁を 走り 足腰を 鍛え 技を 磨く。",
		'zh-tw': "棲息在遙遠地區的山岳地帶。會在斷崖絕壁上來回奔跑 鍛鍊下盤，磨練招式。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "フィールドクラッシュ",
				'zh-tw': "場地粉碎",
			},
			damage: 50,
			cost: ["Darkness", "Colorless"],
			effect: {
				ja: "場に出ている相手のスタジアムをトラッシュする。",
				'zh-tw': "將場上的對手的競技場卡丟棄。",
			},
		},
		{
			name: {
				ja: "しゅらのこぶし",
				'zh-tw': "修羅拳",
			},
			damage: "100+",
			cost: ["Darkness", "Darkness", "Colorless"],
			effect: {
				ja: "このポケモンにダメカンがのっているなら、100ダメージ追加。",
				'zh-tw': "若這隻寶可夢身上放置有傷害指示物，則增加100點傷害。",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 586627,
				tcgplayer: 571364,
			},
		},
	],

	evolveFrom: {
		ja: "ダクマ",
	},

	retreat: 2,
	regulationMark: "E",
	rarity: "None",
	dexId: [892],
};

export default card;
