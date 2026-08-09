import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "キリンリキ",
		'zh-tw': "麒麟奇",
		th: "คิรินริกิ",
	},

	illustrator: "matazo",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "尻尾にも 小さな 頭がある。 背後から 近づく 敵がいると 本能的に 噛みついてくる。",
		'zh-tw': "尾巴上也有小小顆的頭。如果有敵人從背後靠近， 就會受本能驅使一咬而上。",
		th: "ที่หางก็มีหัวเล็ก ๆ อยู่ ถ้ามีศัตรูเข้ามาใกล้จากข้างหลัง ก็จะกัดตามสัญชาตญาณ",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "サイコダメージ",
				'zh-tw': "精神傷害",
				th: "ไซโคแดเมจ",
			},
			damage: "20+",
			cost: ["Psychic", "Colorless"],
			effect: {
				ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。",
				'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×10點傷害。",
				th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x10",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 752913,
				tcgplayer: 566183,
			},
		},
	],

	retreat: 1,
	regulationMark: "H",
	rarity: "Common",
	dexId: [203],
};

export default card;
