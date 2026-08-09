import { Card } from "../../../interfaces";
import Set from "../SV-P";

const card: Card = {
	set: Set,
	name: {
		ja: "ピカチュウ",
		'zh-tw': "皮卡丘",
		th: "วาไนเดอร์",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "甘えん坊なニャオハ のんびりやのホゲータ きれい好きなクワッス。 新しい仲間との冒険を ピカチュウも楽しみにしているみたい！",
		'zh-tw': "愛撒嬌的新葉喵，溫溫吞吞的呆火鱷，愛乾淨的潤水鴨。皮卡丘好像也很期待即將和新夥伴們一起展開的冒險！",
		th: "ใช้ใยในการห้อยตัวจากกิ่งไม้หรือเพดานและเคลื่อนไหวอย่างเงียบเชียบ จัดการเหยื่อก่อนที่พวกมันจะรู้ตัว",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "みんなでぼうけん",
				'zh-tw': "一同冒險",
				th: "ผูกรัดด้วยใย",
			},
			damage: "30+",
			cost: ["Lightning", "Lightning", "Lightning"],
			effect: {
				ja: "自分のベンチポケモンの数×10ダメージ追加。",
				'zh-tw': "增加自己的備戰寶可夢的數量×10點傷害。",
				th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว จะทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ชา]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687450,
				tcgplayer: 587758,
			},
		},
	],

	retreat: 1,
	regulationMark: "G",
	rarity: "Promo",
	dexId: [25],
};

export default card;
