import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ヒスイ マルマインV",
		'zh-tw': "洗翠 頑皮雷彈V",
		'th-th': "ฮิซุย มารุมายน์V",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 210,
	types: ["Grass"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "かんしゃくボム",
				'zh-tw': "煩躁炸彈",
				'th-th': "ระเบิดหัวร้อน",
			},
			damage: "100×",
			cost: [],
			effect: {
				'ja-jp': "このポケモンが受けている特殊状態の数×100ダメージ。",
				'zh-tw': "造成這隻寶可夢處於特殊狀態的數量×100點傷害。",
				'th-th': "แดเมจจะเท่ากับจำนวนสภาวะผิดปกติที่โปเกมอนนี้ได้รับอยู่ x100",
			},
		},
		{
			name: {
				'ja-jp': "ソーラーシュート",
				'zh-tw': "日光射擊",
				'th-th': "โซลาร์ชูต",
			},
			damage: 120,
			cost: ["Grass", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについているエネルギーを、すべてトラッシュする。",
				'zh-tw': "將這隻寶可夢身上附加的能量全部丟棄。",
				'th-th': "ทิ้งพลังงานที่ติดอยู่กับโปเกมอนนี้ทั้งหมดที่ตำแหน่งทิ้งการ์ด",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687482,
				tcgplayer: 571543,
			},
		},
	],

	retreat: 1,
	regulationMark: "F",
	rarity: "Double rare",
	dexId: [101],
};

export default card;
