import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "モルペコ",
		'zh-tw': "莫魯貝可",
		th: "โมรุเปโกะ",
	},

	illustrator: "NC Empire",
	category: "Pokemon",
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "空腹ホルモンで 性質が 変化。 お腹が 満たされるまで 悪の 限りを つくす。",
		'zh-tw': "饑餓荷爾蒙改變了牠的性情。牠會做盡一切的壞事，直到把肚子填飽為止。",
		th: "นิสัยจะเปลี่ยนเพราะฮอร์โมนที่ออกมาตอนท้องว่าง จะทำความชั่วร้ายจนถึงขีดสุดจนกว่าท้องมันจะอิ่ม",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "エサひろい",
				'zh-tw': "撿飼料",
				th: "จับเหยื่อ",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分のトラッシュからグッズを1枚選び、相手に見せて、手札に加える。",
				'zh-tw': "從自己的棄牌區選擇1張物品卡，在給對手看過後加入手牌。",
				th: "เลือกการ์ดไอเท็ม 1 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดูแล้วนำขึ้นมือ",
			},
		},
		{
			name: {
				ja: "はらぺこタックル",
				'zh-tw': "空腹衝撞",
				th: "แทกเกิลหิวโซ",
			},
			damage: "20+",
			cost: ["Darkness"],
			effect: {
				ja: "自分の手札が1枚もないなら、90ダメージ追加。",
				'zh-tw': "若自己1張手牌都沒有，則增加90點傷害。",
				th: "ถ้าบนมือฝ่ายเราไม่มีการ์ดเลยแม้แต่ 1 ใบ การโจมตีนี้จะเพิ่มแดเมจอีก 90",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533457,
				tcgplayer: 568996,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [877],
};

export default card;
