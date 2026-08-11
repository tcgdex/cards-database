import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "バリヤード",
		'zh-tw': "魔牆人偶",
		th: "บาร์เรียด",
	},

	illustrator: "Nelnal",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "大きな 手のひらは パントマイムを するために 発達 したと 考える 学者も 多い。",
		'zh-tw': "有很多學者認為牠大大的手掌是因為要 表演默劇而發達起來的。",
		th: "นักวิชาการส่วนมากคิดกันว่าฝ่ามือใหญ่นั้นพัฒนาขึ้นมาเพื่อเล่นละครใบ้",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "そっくりショー",
				'zh-tw': "相仿秀",
				th: "โชว์เลียนแบบ",
			},
			cost: ["Colorless"],
			effect: {
				ja: "相手の手札を見る。のぞむなら、その中にあるサポートを1枚選び、その効果を、このワザの効果として使う。",
				'zh-tw': "查看對手的手牌。若希望，選擇1張其中的支援者卡，將那個效果作為這個招式的效果使用。",
				th: "ดูการ์ดบนมือฝ่ายตรงข้าม หากต้องการ เลือกการ์ดซัพพอร์ตที่อยู่ในนั้น 1 ใบ ใช้เอฟเฟกต์นั้น เป็นเอฟเฟกต์ของท่าต่อสู้นี้ได้",
			},
		},
		{
			name: {
				ja: "ぶきみなねんぱ",
				'zh-tw': "不祥波動",
				th: "คลื่นแปลกประหลาด",
			},
			damage: 20,
			cost: ["Psychic"],
			effect: {
				ja: "相手のバトルポケモンをこんらんにする。",
				'zh-tw': "將對手的戰鬥寶可夢【混亂】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[สับสน]",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752912,
				tcgplayer: 566182,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [122],
};

export default card;
