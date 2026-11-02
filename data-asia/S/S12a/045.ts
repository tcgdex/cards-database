import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "レジエレキ",
		'zh-tw': "雷吉艾勒奇",
		th: "เรจิเอเลคิ",
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーの 塊。 体の リングを 外すと 秘めた 力が 解き放たれるらしい。",
		'zh-tw': "由電能凝聚而成的寶可夢。據說拿下牠身上的圓環後， 就會解放牠潛藏的力量。",
		th: "เป็นก้อนพลังงานไฟฟ้า ว่ากันว่าหากถอดวงแหวนบนร่างกายออกแล้วพลังที่เก็บซ่อนไว้จะได้รับการปลดปล่อย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "でんじソナー",
				'zh-tw': "電磁聲納",
				th: "โซนาร์แม่เหล็กไฟฟ้า",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュからトレーナーズを1枚選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇1張訓練家卡，在給對手看過後加入手牌。",
				th: "เลือกการ์ดเทรนเนอร์ 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ",
			},
		},
		{
			name: {
				ja: "ターゲットボルト",
				'zh-tw': "目標伏特",
				th: "ทาร์เก็ตโบลต์",
			},
			cost: ["Lightning", "Lightning", "Colorless"],
			effect: {
				ja: "このポケモンについている[L]エネルギーを2個トラッシュし、相手のベンチポケモン1匹に、120ダメージ。［ベンチは弱点・抵抗力を計算しない。］",
				'zh-tw': "將這隻寶可夢身上附加的2個【雷】能量丟棄，對手的1隻備戰寶可夢受到120點傷害。[在備戰區不計算弱點・抵抗力。]",
				th: "ทิ้งพลังงาน[สายฟ้า]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูกที่ตำแหน่งทิ้งการ์ด แล้วทำแดเมจ 120 กับโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว {โปเกมอนบนเบนช์จะไม่นำจุดอ่อนและความต้านทานมาคิด}",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687525,
				tcgplayer: 571583,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577456,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [894],
};

export default card;
