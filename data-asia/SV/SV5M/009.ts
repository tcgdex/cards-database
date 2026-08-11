import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "メブキジカ",
		'zh-tw': "萌芽鹿",
		th: "เมบูคิจิกะ",
	},

	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "秋の姿の メブキジカは とても 気性が 荒いと 知られている。 オス同士は ケンカが 絶えない。",
		'zh-tw': "秋天的樣子的萌芽鹿以性情粗暴聞名。 雄性間一天到晚都在打架。",
		th: "เป็นที่รู้กันว่าเมบูคิจิกะในร่างฤดูใบไม้ร่วงมีนิสัยก้าวร้าวมาก พวกตัวผู้มักจะสู้กันเองอย่างไม่รู้จักจบสิ้น",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "しきのうつろい",
				'zh-tw': "四季變換",
				th: "ฤดูกาลผันผ่าน",
			},
			effect: {
				ja: "自分の番に1回使える。自分の山札からスタジアムを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張競技場卡，在給對手看過後加入手牌。並且重洗牌庫。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ดสเตเดียม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "かいりきホーン",
				'zh-tw': "怪力角擊",
				th: "เขามหากาฬ",
			},
			damage: 110,
			cost: ["Grass", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752890,
				tcgplayer: 566160,
			},
		},
	],

	evolveFrom: {
		ja: "シキジカ",
	},

	retreat: 2,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [586],
};

export default card;
