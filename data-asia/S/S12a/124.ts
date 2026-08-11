import { Card } from "../../../interfaces";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		ja: "レジギガスV",
		'zh-tw': "雷吉奇卡斯V",
		th: "เรจิกิกัสV",
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 240,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "ぶちかます",
				'zh-tw': "頭突",
				th: "ตบหนัก",
			},
			damage: 50,
			cost: ["Colorless", "Colorless"],
		},
		{
			name: {
				ja: "ふんぬのてっつい",
				'zh-tw': "憤怒懲處",
				th: "ค้อนฉุนเฉียว",
			},
			damage: "100+",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				ja: "このポケモンにのっているダメカンの数×10ダメージ追加。このポケモンをこんらんにする。",
				'zh-tw': "增加這隻寶可夢身上放置的傷害指示物的數量×10點傷害。將這隻寶可夢【混亂】。",
				th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนนี้ x10 ทำให้โปเกมอนนี้เป็นสภาวะ[สับสน]",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687686,
				tcgplayer: 571662,
			},
		},
	],

	retreat: 4,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [486],
};

export default card;
