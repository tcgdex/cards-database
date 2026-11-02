import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "チリーン",
		'zh-tw': "風鈴鈴",
		th: "ชิรีน",
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "超音波の 鳴き声を 持つ。 ふわふわと 浮かび 風に 乗って 長い 距離を 旅する。",
		'zh-tw': "擁有超音波的叫聲。輕飄飄地浮起來，乘著風旅行到遠方。",
		th: "มีเสียงร้องที่มีคลื่นเสียงความถี่สูง ลอยปลิวไปตามลม เดินทางท่องเที่ยวระยะทางไกล",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ちいさなおつかい",
				'zh-tw': "小使者",
				th: "งานเล็กน้อย",
			},
			cost: ["Colorless"],
			effect: {
				ja: "自分の山札から基本エネルギーを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
				'zh-tw': "從自己的牌庫選擇最多2張基本能量卡，在給對手看過後加入手牌。並且重洗牌庫。",
				th: "เลือกการ์ดพลังงานพื้นฐานจากสำรับการ์ดฝ่ายเราได้สูงสุด 2 ใบ ให้ฝ่ายตรงข้ามดู แล้วนำขึ้นมือ แล้วสับสำรับการ์ด",
			},
		},
		{
			name: {
				ja: "やさしいねいろ",
				'zh-tw': "溫柔音色",
				th: "เสียงอ่อนโยน",
			},
			damage: 20,
			cost: ["Colorless"],
			effect: {
				ja: "相手のバトルポケモンをねむりにする。",
				'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของฝ่ายตรงข้ามเป็นสภาวะ【หลับ】",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533342,
				tcgplayer: 568973,
			},
		},
	],

	retreat: 1,
	regulationMark: "E",
	rarity: "Common",
	dexId: [358],
};

export default card;
