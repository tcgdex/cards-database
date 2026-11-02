import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "アブリボン",
		'zh-tw': "蝶結萌虻",
		th: "อบูริบง",
	},

	illustrator: "Tika Matsuno",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "花粉と 蜜を 混ぜて 団子を つくる。 調合する 種類や 量に よって 効果が 違う。",
		'zh-tw': "用花粉和花蜜製作團子。依調配的種類和劑量不同， 團子的效果也不一樣。",
		th: "ปั้นขนมดังโงะจากละอองเกสรดอกไม้และน้ำหวาน ผลลัพธ์จะแตกต่างกันออกไปขึ้นอยู่กับปริมาณและชนิดที่ผสม",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "よけいなかふん",
				'zh-tw': "多餘花粉",
				th: "ละอองเกสรส่วนเกิน",
			},
			damage: 30,
			cost: ["Colorless"],
			effect: {
				ja: "次の自分の番、このワザを受けたポケモンがきぜつしたとき、サイドを2枚多くとる。",
				'zh-tw': "在下個自己的回合，受到這個招式的寶可夢【昏厥】時，多獲得2張獎賞卡。",
				th: "เทิร์นถัดไปของฝ่ายเรา เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้[หมดสภาพ]แล้ว หยิบการ์ดรางวัลเพิ่ม 2 ใบ",
			},
		},
	],

	weaknesses: [{ type: "Metal", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752915,
				tcgplayer: 566185,
			},
		},
	],

	evolveFrom: {
		ja: "アブリー",
	},

	retreat: 0,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [743],
};

export default card;
