import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "エネコ",
		'zh-tw': "向尾喵",
		'th-th': "เอเนโค",
	},

	illustrator: "Atsuko Nishida",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],

	description: {
		'ja-jp': "動くものを つい 追ってしまう。 自分の 尻尾を 追いかけて 同じ 場所を グルグル 回る。",
		'zh-tw': "看見在動的東西會不由自主地追上去。會追著自己的尾巴， 一圈圈地原地打轉。",
		'th-th': "ชอบเผลอไล่ตามสิ่งที่เคลื่อนไหว และวิ่งวนไปมาอยู่ที่เดิมเพื่อไล่จับหางตัวเอง",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "なかまをよぶ",
				'zh-tw': "呼朋引伴",
				'th-th': "เรียกเพื่อน",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				'th-th': "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				'ja-jp': "たいあたり",
				'zh-tw': "撞擊",
				'th-th': "พุ่งเข้าชน",
			},
			damage: 20,
			cost: ["Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752939,
				tcgplayer: 566206,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [300],
};

export default card;
