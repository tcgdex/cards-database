import { Card } from "../../../interfaces";
import Set from "../S5I";

const card: Card = {
	set: Set,
	name: {
		ja: "ガラル ヤドラン",
		'zh-tw': "伽勒爾 呆殼獸",
		th: "กาลาร์ ยาโดรัน",
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "噛みついている シェルダーの ベロを 握ると 巻貝の 先端から 猛毒の 液体を 撃ちだす。",
		'zh-tw': "當牠捏住咬著自己的大舌貝的舌頭，螺旋狀的貝殼尖端就會噴射出有劇毒的液體。",
		th: "พอจับลิ้นของเชลเดอร์ตอนที่กำลังจะงับได้ ก็จะยิงของเหลวพิษรุนแรงออกมาโจมตีจากปลายวงเกลียวของเปลือกหอย",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				ja: "とびちるどく",
				'zh-tw': "噴濺毒",
				th: "พิษกระเด็น",
			},
			cost: ["Darkness"],
			effect: {
				ja: "おたがいのバトルポケモンを、それぞれどくにする。",
				'zh-tw': "將雙方的戰鬥寶可夢【中毒】。",
				th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ของทั้งสองฝ่าย แต่ละตัวเป็นสภาวะ [พิษ]",
			},
		},
		{
			name: {
				ja: "ヒステリックハンマー",
				'zh-tw': "歇斯底里之錘",
				th: "ฮีสเทอริกแฮมเมอร์",
			},
			damage: "100+",
			cost: ["Darkness", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンが特殊状態なら、120ダメージ追加。",
				'zh-tw': "若這隻寶可夢處於特殊狀態，則增加120點傷害。",
				th: "ถ้าโปเกมอนนี้เป็นสภาวะผิดปกติ การโจมตีนี้จะเพิ่มแดเมจอีก 120",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 533427,
				tcgplayer: 568990,
			},
		},
	],

	evolveFrom: {
		ja: "ガラル ヤドン",
	},

	retreat: 3,
	regulationMark: "E",
	rarity: "Uncommon",
	dexId: [80],
};

export default card;
