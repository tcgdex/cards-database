import { Card } from "../../../interfaces";
import Set from "../SV5M";

const card: Card = {
	set: Set,
	name: {
		ja: "テツノイワオex",
		'zh-tw': "鐵磐岩ex",
		th: "ศิลาเหล็กex",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 240,
	types: ["Fighting"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "リパルサーアックス",
				'zh-tw': "還擊斧",
				th: "ขวานรีพัลเซอร์",
			},
			damage: 60,
			cost: ["Fighting", "Colorless"],
			effect: {
				ja: "次の相手の番、このポケモンがワザのダメージを受けたとき、ワザを使ったポケモンにダメカンを8個のせる。",
				'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害時，在使用招式的寶可夢身上放置8個傷害指示物。",
				th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนนี้ได้รับแดเมจของท่าต่อสู้ วางตัวนับแดเมจ 8 ตัวบนโปเกมอนที่ใช้ท่าต่อสู้",
			},
		},
		{
			name: {
				ja: "パワースタンプ",
				'zh-tw': "力量踩踏",
				th: "พาวเวอร์สแตมป์",
			},
			damage: 200,
			cost: ["Fighting", "Fighting", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。",
				th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 752971,
				tcgplayer: 566238,
			},
		},
	],

	retreat: 3,
	regulationMark: "H",
	rarity: "Ultra Rare",
	dexId: [1022],

	suffix: "EX",
};

export default card;
