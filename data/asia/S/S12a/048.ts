import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ゲンガー",
		'zh-tw': "耿鬼",
		th: "เก็งกา",
	},

	illustrator: "Uta",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "満月の夜 影が 勝手に 動きだして 笑うのは ゲンガーの しわざに 違いない。",
		'zh-tw': "滿月的夜晚，如果影子自己動起來並露出笑容， 那肯定是耿鬼搞的鬼。",
		th: "คืนจันทร์เพ็ญ เงาเคลื่อนไหวเองแล้วหัวเราะนั้น เป็นฝีมือของเก็งกาแน่นอน",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "ならくのうらもん",
				'zh-tw': "奈落後門",
				th: "ประตูหลังแห่งขุมนรก",
			},
			effect: {
				ja: "このカードがトラッシュにあるなら、自分の番に1回使える。このカードをベンチに出す。その後、このポケモンにダメカンを3個のせる。",
				'zh-tw': "若這張卡在棄牌區，則在自己的回合時可使用1次。將這張卡放置於備戰區。然後，在這隻寶可夢身上放置3個傷害指示物。",
				th: "ถ้าการ์ดนี้อยู่บนตำแหน่งทิ้งการ์ด ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา วางการ์ดนี้บนเบนช์ หลังจากนั้น วางตัวนับแดเมจ 3 ตัวบนโปเกมอนนี้",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "スクリームサークル",
				'zh-tw': "尖嘯陣",
				th: "สครีมเซอร์เคิล",
			},
			cost: ["Psychic"],
			effect: {
				ja: "相手のベンチポケモンの数×2個ぶんのダメカンを、相手のバトルポケモンにのせる。",
				'zh-tw': "將與對手的備戰寶可夢的數量×2個的相同數量的傷害指示物，放置於對手的戰鬥寶可夢身上。",
				th: "วางตัวนับแดเมจตามจำนวนโปเกมอนบนเบนช์ฝ่ายตรงข้าม x2 ตัวที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			},
		},
	],

	weaknesses: [{ type: "Darkness", value: "x2" }],
	resistances: [{ type: "Fighting", value: "-30" }],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 687528,
				tcgplayer: 571586,
			},
		},
	],

	evolveFrom: {
		ja: "ゴースト",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "None",
	dexId: [94],
};

export default card;
