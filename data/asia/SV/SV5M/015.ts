import { Card } from "models/database/card";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ベラカス",
		'zh-tw': "蟲甲聖",
		'th-th': "เบราคาสุ",
	},

	illustrator: "mingo",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		'ja-jp': "玉の中に 赤ん坊が 眠る。 心地よく 眠れるように 脚で 玉を まわして あやしているのだ。",
		'zh-tw': "為了讓在球裡睡覺的寶寶可以睡得更加香甜，會用腳 轉著球，讓寶寶感到安穩。",
		'th-th': "มีตัวอ่อนหลับใหลอยู่ภายในลูกบอล ใช้ขาหมุนลูกบอลเพื่อกล่อมให้ตัวอ่อนนอนหลับสบาย",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "スフィアシールド",
				'zh-tw': "球形盾牌",
				'th-th': "สเฟียร์ชีลด์",
			},
			effect: {
				'ja-jp': "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のポケモンからワザのダメージや効果を受けない。",
				'zh-tw': "只要這隻寶可夢在場上，自己的所有備戰寶可夢不會受到對手的寶可夢招式的傷害與效果的影響。",
				'th-th': "ตราบใดที่โปเกมอนนี้ยังอยู่ โปเกมอนบนเบนช์ฝ่ายเราทุกตัว จะไม่ได้รับแดเมจและเอฟเฟกต์ของท่าต่อสู้จากโปเกมอนฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "サイコキネシス",
				'zh-tw': "精神強念",
				'th-th': "ไซโคคิเนซิส",
			},
			damage: "10+",
			cost: ["Grass"],
			effect: {
				'ja-jp': "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上附加的能量的數量×30點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752896,
				tcgplayer: 566166,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "シガロコ",
	},

	retreat: 1,
	regulationMark: "H",
	rarity: "Uncommon",
	dexId: [954],
};

export default card;
