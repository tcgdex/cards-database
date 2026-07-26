import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒトモシ",
		'zh-tw': "燭光靈",
		th: "ฮิโตโมชิ",
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。",
		'zh-tw': "點亮頭上的燭火， 假裝在指引道路。 但其實是在吸取對方的生命力。",
		th: "จุดไฟให้แสงสว่างแล้วแสร้งทำเป็นคอยนำทางให้ผู้อื่น ระหว่างนั้นก็สูบพลังชีวิตของผู้คนเหล่านั้นไปด้วย",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "なかまをよぶ",
				'zh-tw': "呼朋引伴",
				th: "เรียกเพื่อน",
			},
			cost: ["Fire"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "ひだね",
				'zh-tw': "火種",
				th: "เชื้อไฟ",
			},
			damage: 20,
			cost: ["Fire", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 767004,
				tcgplayer: 568009,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [607],
};

export default card;
