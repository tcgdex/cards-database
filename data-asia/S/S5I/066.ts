import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "シバ",
		'zh-tw': "希巴",
		th: "ชิบะ",
	},

	illustrator: "Ken Sugimori",
	category: "Trainer",

	effect: {
		ja: "自分の手札をすべて山札にもどして切る。その後、山札を4枚引く。前の相手の番に、自分のポケモンがきぜつしていたなら、引く枚数は7枚になる。",
		'zh-tw': "將自己的手牌全部放回牌庫並重洗。然後，從牌庫抽出4張卡。在上個對手的回合，若自己的寶可夢【氣絕】了，則改爲抽出7張卡。",
		th: "ใส่การ์ดบนมือฝ่ายเราทั้งหมดกลับสำรับการ์ดแล้วสับ หลังจากนั้น จั่วการ์ด 4 ใบจากสำรับการ์ด เทิร์นก่อนหน้าของฝ่ายตรงข้าม ถ้าโปเกมอนฝ่ายเรา [หมดสภาพ] จะจั่วการ์ดได้ 7 ใบ",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533552,
				tcgplayer: 569015,
			},
		},
	],

	trainerType: "Supporter",
	regulationMark: "E",
	rarity: "Uncommon",
};

export default card;
