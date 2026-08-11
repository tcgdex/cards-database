import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ドダイトス",
		'zh-tw': "土台龜",
		'th-th': "โดไดโทส",
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	hp: 190,
	types: ["Grass"],

	description: {
		'ja-jp': "小さな ポケモンたちが 集まり 動かない ドダイトスの 背中で 巣作りを はじめることがある。",
		'zh-tw': "有時候小型的寶可夢們會聚集起來，在一動不動的 土台龜背上築起巢穴。",
		'th-th': "บางครั้งบรรดาโปเกมอนขนาดเล็กจะมารวมตัวกันสร้างรังอยู่บนหลังโดไดโทสที่อยู่นิ่งไม่ขยับตัว",
	},

	stage: "Stage2",

	attacks: [
		{
			name: {
				'ja-jp': "エボルプレス",
				'zh-tw': "進化壓制",
				'th-th': "อีโวเพรส",
			},
			damage: "50×",
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "自分の場の進化ポケモンの数×50ダメージ。",
				'zh-tw': "造成自己的場上進化寶可夢的數量×50點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนโปเกมอนวิวัฒนาการบนกระดานฝ่ายเรา x50",
			},
		},
		{
			name: {
				'ja-jp': "ぶちかます",
				'zh-tw': "頭突",
				'th-th': "ตบหนัก",
			},
			damage: 160,
			cost: ["Grass", "Colorless", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687488,
				tcgplayer: 571546,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ハヤシガメ",
	},

	retreat: 4,
	regulationMark: "F",
	rarity: "None",
	dexId: [389],
};

export default card;
