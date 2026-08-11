import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ドータクン",
		'zh-tw': "青銅鐘",
		th: "โดทาคุน",
	},

	illustrator: "Hasuno",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		ja: "体の模様 から 本来 ガラルには いない ポケモンと 考える 学者も 多い。",
		'zh-tw': "牠身上的紋路讓許多學者認為牠 原本並不存在於伽勒爾。",
		th: "มีนักวิทยาศาสตร์หลายคนคิดว่าดูจากลวดลายตามตัวแล้วโปเกมอนนี้ไม่ได้อยู่ในกาลาร์มาก่อน",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "メタルトランス",
				'zh-tw': "金屬轉移",
				th: "เมทัลทรานสเฟอร์",
			},
			effect: {
				ja: "自分の番に何回でも使える。自分の場のポケモンについている[鋼]エネルギーを1個選び、自分の別のポケモンにつけ替える。",
				'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的場上寶可夢身上附加的【鋼】能量，改附於自己的其他寶可夢身上。",
				th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกพลังงาน [โลหะ] ที่ติดกับโปเกมอนบนกระดานฝ่ายเรา 1 ลูก ไปติดกับโปเกมอนตัวอื่นของฝ่ายเรา",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "しねんのずつき",
				'zh-tw': "意念頭錘",
				th: "ท่าโขกหัวพลังจิต",
			},
			damage: 70,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687661,
				tcgplayer: 571637,
			},
		},
	],

	evolveFrom: {
		ja: "ドーミラー",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "None",
	dexId: [437],
};

export default card;
