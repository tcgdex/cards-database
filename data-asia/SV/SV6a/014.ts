import { Card } from "../../../interfaces";
import Set from "../SV6a";

const card: Card = {
	set: Set,
	name: {
		ja: "マニューラ",
		'zh-tw': "瑪狃拉",
	},

	illustrator: "aspara",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],

	description: {
		ja: "４～５匹の グループで 行動。 岩や 樹木に サインを 残し 連係して 獲物を 仕留める。",
		'zh-tw': "４～５隻一組行動。 在岩石和樹木上留下記號， 以團隊合作捕殺獵物。",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "きりさく",
				'zh-tw': "劈開",
			},
			damage: 40,
			cost: ["Water"],
		},
		{
			name: {
				ja: "ヘイルクロー",
				'zh-tw': "冰雹爪",
			},
			damage: 70,
			cost: ["Water", "Water"],
			effect: {
				ja: "このポケモンについているエネルギーをすべてトラッシュし、相手のバトルポケモンをマヒにする。",
				'zh-tw': "將這隻寶可夢身上附加的能量卡全部丟棄，將對手的戰鬥寶可夢【麻痺】。",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 773763,
				tcgplayer: 566265,
			},
		},
	],

	evolveFrom: {
		ja: "ニューラ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [461],
};

export default card;
