import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マグカルゴ",
		'zh-tw': "熔岩蝸牛",
		'th-th': "มักคาร์โก",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 120,
	types: ["Fire"],

	description: {
		'ja-jp': "背中の 殻は 崩れやすいが ときどき 体内を 巡っている 高熱の 炎が 噴き出す。",
		'zh-tw': "背上的殼很容易崩裂，循環在體內的高熱火焰 會不時噴發出來。",
		'th-th': "เปลือกที่หลังของมันแตกร่วนได้ง่าย แต่บางครั้งไฟความร้อนสูงที่ไหลเวียนอยู่ในร่างกายก็จะพุ่งออกมา",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "ようがんちたい",
				'zh-tw': "熔岩地域",
				'th-th': "แถบลาวา",
			},
			effect: {
				'ja-jp': "このポケモンがいるかぎり、相手の番に、相手のバトルポケモンがベンチにもどるたび、新しく出てきたポケモンをやけどにする。",
				'zh-tw': "只要這隻寶可夢在場上，在對手的回合，每次對手的戰鬥寶可夢回到備戰區時，將新上場的寶可夢【灼傷】。",
				'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ ในเทิร์นของฝ่ายตรงข้าม ทุกครั้งที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกลับมาบนเบนช์ ทำให้โปเกมอนที่เพิ่งออกมาใหม่เป็นสภาวะ[ไหม้]",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ヒートブラスト",
				'zh-tw': "高溫爆破",
				'th-th': "ฮีทบลาสต์",
			},
			damage: 100,
			cost: ["Fire", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752899,
				tcgplayer: 566169,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "マグマッグ",
	},

	retreat: 4,
	regulationMark: "H",
	rarity: "Rare",
	dexId: [219],
};

export default card;
