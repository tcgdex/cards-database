import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラVSTAR",
		'zh-tw': "捷拉奧拉VSTAR",
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "クラッシュビート",
				'zh-tw': "粉碎律動",
			},
			damage: 190,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
				'zh-tw': "若希望，將場上的競技場卡丟棄。",
			},
		},
		{
			name: {
				ja: "いかずちスター",
				'zh-tw': "[VSTAR力量]雷霆星星",
			},
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のポケモンを4回選び、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×60ダメージ。（1匹を2回以上選べる。）［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "選擇4次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×60點傷害。（1隻可選擇2次以上。）[對戰中，己方只可使用1次【VSTAR】力量。]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687782,
				tcgplayer: 571758,
			},
		},
	],

	evolveFrom: {
		ja: "ゼラオラV",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Special illustration rare",
	dexId: [807],
};

export default card;
