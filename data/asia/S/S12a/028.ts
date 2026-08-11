import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "オリジンパルキアVSTAR",
		'zh-tw': "起源帕路奇亞VSTAR",
		th: "พัลเกียดั้งเดิมVSTAR",
	},

	illustrator: "aky CG Works",
	category: "Pokemon",
	hp: 280,
	types: ["Water"],

	stage: "VSTAR",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "スターポータル",
				'zh-tw': "星星入口",
				th: "สตาร์พอร์ทัล",
			},
			effect: {
				ja: "自分の番に使える。自分のトラッシュから[W]エネルギーを3枚まで選び、自分の[W]ポケモンに好きなようにつける。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "在自己的回合時可使用。從自己的棄牌區選擇最多3張【水】能量卡，以任意方式附於自己的【水】寶可夢身上。[對戰中，己方只可使用1次【VSTAR】力量。]",
				th: "ใช้ได้ในเทิร์นฝ่ายเรา เลือกการ์ดพลังงาน[น้ำ]ได้สูงสุด 3 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอน[น้ำ]ฝ่ายเราตามชอบ {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "あくうのうねり",
				'zh-tw': "亞空潮漩",
				th: "เกลียวคลื่นแห่งมิติ",
			},
			damage: "60+",
			cost: ["Water", "Water"],
			effect: {
				ja: "おたがいのベンチポケモンの数×20ダメージ追加。",
				'zh-tw': "增加雙方的備戰寶可夢的數量×20點傷害。",
				th: "แดเมจจะเพิ่มตามจำนวนโปเกมอนบนเบนช์ของทั้งสองฝ่าย x20",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687508,
				tcgplayer: 571566,
			},
		},
	],

	evolveFrom: {
		ja: "nullV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [484],
};

export default card;
