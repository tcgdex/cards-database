import { Card } from "../../../interfaces";
import Set from "../SV6";

const card: Card = {
	set: Set,
	name: {
		ja: "イルミーゼ",
		'zh-tw': "甜甜螢",
		th: "อิลูมิเซะ",
	},

	illustrator: "Orca",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "バルビートを 誘導して 夜空に サインを 描く。 サインの 意味を 研究する 学者も いる。",
		'zh-tw': "會誘導電螢蟲在夜空中 描繪記號。也有些學者 在研究記號的含意。",
		th: "จะชักนำบารูบีทขึ้นไปวาดสัญลักษณ์บนท้องฟ้าในเวลากลางคืน และก็มีนักวิชาการที่ศึกษาค้นคว้าถึงความหมายของสัญลักษณ์เหล่านั้น",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "スローパフューム",
				'zh-tw': "慢芬香",
				th: "สโลว์เพอร์ฟูม",
			},
			cost: ["Colorless"],
			effect: {
				ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
				'zh-tw': "這個招式只可在後攻玩家的最初回合使用。選擇1隻對手的備戰寶可夢，將那隻寶可夢與附加的卡全部放回對手的牌庫並重洗。",
				th: "ท่าต่อสู้นี้ ใช้ได้ในเทิร์นแรกสุดของผู้เล่นฝ่ายเล่นทีหลังเท่านั้น เลือกโปเกมอนบนเบนช์ฝ่ายตรงข้าม 1 ตัว นำโปเกมอนนั้น และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดฝ่ายตรงข้ามแล้วสับ",
			},
		},
		{
			name: {
				ja: "かっくう",
				'zh-tw': "滑翔",
				th: "ถลาลม",
			},
			damage: 30,
			cost: ["Grass", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 766973,
				tcgplayer: 567995,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [314],
};

export default card;
