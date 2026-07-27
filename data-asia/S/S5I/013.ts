import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ヤトウモリ",
		'zh-tw': "夜盜火蜥",
		th: "ยาโทโมริ",
	},

	illustrator: "Yuka Morii",
	category: "Pokemon",
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "獲物の 背後に 忍び寄り 気づかれる 前に 毒ガスを 浴びせて 動けなくしてしまう。",
		'zh-tw': "悄悄地從背後靠近獵物，在對方察覺之前釋放毒氣，讓對方動彈不得。",
		th: "ลอบเข้าใกล้เหยื่อจากด้านหลัง ก่อนที่เหยื่อจะรู้ตัว มันจะอาบตัวเหยื่อด้วยแก๊สพิษและทำให้เคลื่อนไหวไม่ได้",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "コールサイン",
				'zh-tw': "呼喚信號",
				th: "คอลซายน์",
			},
			cost: ["Fire"],
			effect: {
				ja: "自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
				th: "เลือกการ์ดโปเกมอน 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533287,
				tcgplayer: 568961,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [757],
};

export default card;
