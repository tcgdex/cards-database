import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "モグリュー",
		'zh-tw': "螺釘地鼠",
		'th-th': "โมกุริว",
	},

	illustrator: "Kariya",
	category: "Pokemon",
	hp: 70,
	types: ["Fighting"],

	description: {
		'ja-jp': "両手の ツメを 重ね合わせ 体を 高速回転 させると 獲物 めがけて 突っ込むのだ。",
		'zh-tw': "會將雙掌上的爪子併攏，並讓身體高速旋轉， 瞄準獵物衝過去。",
		'th-th': "ประกบเล็บมือทั้งสองข้างเข้าด้วยกัน แล้วหมุนตัวด้วยความรวดเร็ว แล้วพุ่งเข้าใส่เหยื่อ",
	},

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ほりまくり",
				'zh-tw': "狂挖",
				'th-th': "ขุดไม่หยุด",
			},
			effect: {
				'ja-jp': "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の山札から「基本[F]エネルギー」を3枚まで選び、トラッシュする。そして山札を切る。",
				'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的牌庫選擇最多3張「基本【鬥】能量」卡，將其丟棄。並且重洗牌庫。",
				'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ทิ้งที่ตำแหน่งทิ้งการ์ด แล้วสับสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "すなしぶき",
				'zh-tw': "沙沫",
				'th-th': "ละอองทราย",
			},
			damage: 20,
			cost: ["Fighting", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752922,
				tcgplayer: 566190,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [529],
};

export default card;
