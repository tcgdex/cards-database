import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "ブリムオンVMAX",
		'zh-tw': "布莉姆溫VMAX",
		th: "บริมออนVMAX",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 320,
	types: ["Psychic"],

	stage: "VMAX",

	abilities: [
		{
			type: "Ability",
			name: {
				ja: "まじょのりょういき",
				'zh-tw': "魔女的領域",
				th: "อาณาเขตแม่มด",
			},
			effect: {
				ja: "自分の番に1回使える。自分の場のポケモンにのっているダメカンを2個まで選び、相手のバトルポケモンにのせ替える。",
				'zh-tw': "在自己的回合時，可使用1次。選擇最多2個放置於自己的場上寶可夢身上的傷害指示物，改放於對手的戰鬥寶可夢身上。",
				th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกตัวนับแดเมจที่วางอยู่บนโปเกมอนบนกระดานฝ่ายเราได้สูงสุด 2 ตัว ย้ายไปวางที่โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม",
			},
		},
	],

	attacks: [
		{
			name: {
				ja: "キョダイテンバツ",
				'zh-tw': "超極巨天譴雷誅",
				th: "กิกะทัณฑ์สวรรค์",
			},
			damage: 150,
			cost: ["Psychic", "Colorless", "Colorless"],
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
			type: "holo",
			thirdParty: {
				cardmarket: 687546,
				tcgplayer: 571604,
			},
		},
	],

	evolveFrom: {
		ja: "ブリムオンV",
	},

	retreat: 2,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [858],
};

export default card;
