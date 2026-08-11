import { Card } from "../../../interfaces";
import Set from "../S10a";

const card: Card = {
	set: Set,
	name: {
		ja: "ヒスイ マルマインV",
		th: "ฮิซุย มารุมายน์V",
		'zh-tw': "洗翠 頑皮雷彈V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				ja: "かんしゃくボム",
				th: "ระเบิดหัวร้อน",
				'zh-tw': "煩躁炸彈",
			},
			damage: "100×",
			cost: [],
			effect: {
				ja: "このポケモンが受けている特殊状態の数×100ダメージ。",
				th: "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนนี้ได้รับอยู่ x100",
				'zh-tw': "造成這隻寶可夢處於特殊狀態的數量×100點傷害。",
			},
		},
		{
			name: {
				ja: "ソーラーシュート",
				th: "โซลาร์ชูต",
				'zh-tw': "日光射擊",
			},
			damage: 120,
			cost: ["Grass", "Colorless"],
			effect: {
				ja: "このポケモンについているエネルギーを、すべてトラッシュする。",
				th: "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 656182,
				tcgplayer: 570666,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [101],
};

export default card;
