import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "レジロック",
		'zh-tw': "雷吉洛克",
		th: "เรจิร็อก",
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "体の あらゆる 部分が 岩で できている。 体が 削れても 自分で 岩を つけて 治す。",
		'zh-tw': "全身所有部分都是由岩石構成。即使身體有磨損， 也能自己補上岩石修復。",
		th: "ทุกส่วนของร่างกายสร้างขึ้นด้วยหินผา แม้ร่างกายถูกกัดเซาะก็ซ่อมแซมด้วยตัวเองโดยการนำก้อนหินมาติด",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "レジゲート",
				'zh-tw': "雷吉之門",
				th: "เรจิเกต",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "ギガインパクト",
				'zh-tw': "終極衝擊",
				th: "กีก้าอิมแพค",
			},
			damage: 140,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "次の自分の番、このポケモンはワザが使えない。",
				'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
				th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ท่าต่อสู้ไม่ได้",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687637,
				tcgplayer: 571613,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 577468,
			},
		},
	],

	retreat: 3,
	regulationMark: "F",
	rarity: "None",
	dexId: [377],
};

export default card;
