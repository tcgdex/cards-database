import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "メタング",
		'zh-tw': "金屬怪",
		th: "เมแทงก์",
	},

	illustrator: "Nobuhiro Imagawa",
	category: "Pokemon",
	hp: 100,
	types: ["Metal"],

	description: {
		ja: "２匹の ダンバルが 磁力で くっついた。 ２つの 脳みそにより サイコパワーは ２倍に 強化。",
		'zh-tw': "由２隻鐵啞鈴以磁力結合而成。因為有２個大腦， 精神力量也強化成２倍了。",
		th: "ดันบัล 2 ตัวที่เชื่อมติดกันด้วยอำนาจแม่เหล็ก ด้วยเนื้อเยื่อสมอง 2 ก้อนทำให้พลังจิตนั้นแข็งแกร่งขึ้น 2 เท่า",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "メタルメーカー",
				'zh-tw': "金屬製造者",
				th: "เมทัลเมกเกอร์",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札を上から4枚見て、その中から「基本[M]エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。残りのカードはすべてウラにして切り、山札の下にもどす。",
				'zh-tw': "在自己的回合時可使用1次。查看自己的牌庫上方4張卡，從其中選擇任意數量的「基本【鋼】能量」卡，以任意方式附於自己的寶可夢身上。將剩餘卡全部翻回反面並重洗，放回牌庫下方。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา ดูการ์ด 4 ใบจากด้านบนของสำรับการ์ดฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] จากในนั้นตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ สับการ์ดที่เหลือทั้งหมดโดยไม่ดูหน้าการ์ด ใส่กลับไปด้านล่างของสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "ビーム",
				'zh-tw': "光束",
				th: "ลำแสง",
			},
			damage: 60,
			cost: ["Metal", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752931,
				tcgplayer: 566198,
			},
		},
	],

	evolveFrom: {
		ja: "ダンバル",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Common",
	dexId: [375],
};

export default card;
