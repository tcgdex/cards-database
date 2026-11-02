import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゼラオラVSTAR",
		'zh-tw': "捷拉奧拉VSTAR",
		th: "เซราโอราVSTAR",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 270,
	types: ["Lightning"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				ja: "クラッシュビート",
				'zh-tw': "粉碎律動",
				th: "แครชบีต",
			},
			damage: 190,
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "のぞむなら、場に出ているスタジアムをトラッシュする。",
				'zh-tw': "若希望，將場上的競技場卡丟棄。",
				th: "หากต้องการ ทิ้งการ์ดสเตเดียมบนกระดานที่ตำแหน่งทิ้งการ์ด",
			},
		},
		{
			name: {
				ja: "いかずちスター",
				'zh-tw': "[VSTAR力量]雷霆星星",
				th: "[พลังVSTAR] ทันเดอร์สตาร์",
			},
			cost: ["Lightning", "Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "相手のポケモンを4回選び、選んだポケモン全員に、弱点・抵抗力を計算せず、選んだ回数×60ダメージ。（1匹を2回以上選べる。）［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "選擇4次對手的寶可夢，對所選的所有寶可夢不計算弱點・抵抗力，造成其選擇次數×60點傷害。（1隻可選擇2次以上。）[對戰中，己方只可使用1次【VSTAR】力量。]",
				th: "เลือกโปเกมอนฝ่ายตรงข้าม 4 ครั้ง ทำแดเมจกับโปเกมอนที่เลือกทุกตัว ตามจำนวนครั้งที่เลือกโปเกมอนตัวนั้น x60 โดยไม่นำจุดอ่อนและความต้านทานมาคิด (1 ตัวสามารถเลือก 2 ครั้งขึ้นไปได้) {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687522,
				tcgplayer: 571580,
			},
		},
	],

	evolveFrom: {
		ja: "ゼラオラV",
	},

	retreat: 0,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [807],
};

export default card;
