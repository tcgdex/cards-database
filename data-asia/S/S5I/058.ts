import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ベロベルト",
		'zh-tw': "大舌舔",
		th: "เบโรเบลท์",
	},

	illustrator: "Mina Nakai",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "手足 より ベロを 使うほうが ずっと 得意。 小さな マメの １粒だけを 器用に 摘める。",
		'zh-tw': "比起手腳，牠更加擅長使用舌頭。就算是１粒小小的豆子，牠也能靈巧地用舌頭撿起來。",
		th: "ถนัดใช้ลิ้นมากกว่าแขนขา โดยสามารถเก็บเม็ดถั่วเล็ก ๆ 1 เมล็ดได้อย่างง่ายดาย",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "ベロリンチョイス",
				'zh-tw': "大舌選擇",
				th: "แลบลิ้นเลือก",
			},
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手は、相手自身の山札を上から3枚トラッシュする。または、相手は相手自身の手札を3枚選び、トラッシュする。",
				'zh-tw': "對手將對手自己的牌庫上方3張卡丟棄。或者對手選擇3張對手自己的手牌，將其丟棄。",
				th: "ฝ่ายตรงข้ามทิ้งการ์ด 3 ใบจากด้านบนสุดของสำรับการ์ดฝ่ายตรงข้ามเอง ที่ตำแหน่งทิ้งการ์ด หรือฝ่ายตรงข้ามเลือกการ์ด 3 ใบจากการ์ดบนมือฝ่ายตรงข้ามเอง ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
		{
			name: {
				ja: "なげとばす",
				'zh-tw': "抛擲",
				th: "ขว้างกระเด็น",
			},
			damage: 100,
			cost: ["Colorless", "Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］",
				'zh-tw': "將對手的戰鬥寶可夢與備戰寶可夢互換。[由對手選擇放置於戰鬥場的寶可夢。]",
				th: "ให้ฝ่ายตรงข้ามสลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอน 1 ตัวบนเบนช์ฝ่ายตรงข้าม [ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533512,
				tcgplayer: 569007,
			},
		},
	],

	evolveFrom: {
		ja: "ベロリンガ",
	},

	retreat: 4,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [463],
};

export default card;
