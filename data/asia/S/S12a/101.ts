import { Card } from "models/database/card";
import Set from "../S12a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "オリジンディアルガVSTAR",
		'zh-tw': "起源帝牙盧卡VSTAR",
		'th-th': "ดีอัลกาดั้งเดิมVSTAR",
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Metal"],

	stage: "VSTAR",

	attacks: [
		{
			name: {
				'ja-jp': "メタルブラスト",
				'zh-tw': "金屬爆破",
				'th-th': "เมทัลบลาซต์",
			},
			damage: "40+",
			cost: ["Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[M]エネルギーの数×40ダメージ追加。",
				'zh-tw': "增加這隻寶可夢身上附加的【鋼】能量的數量×40點傷害。",
				'th-th': "แดเมจจะเพิ่มตามจำนวนพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ x40",
			},
		},
		{
			name: {
				'ja-jp': "スタークロノス",
				'zh-tw': "[VSTAR力量] 星星柯羅諾斯",
				'th-th': "[พลังVSTAR] สตาร์โครนอส",
			},
			damage: 220,
			cost: ["Metal", "Metal", "Metal", "Metal", "Colorless"],
			effect: {
				'ja-jp': "この番が終わったら、もう1回自分の番を始める。［対戦中、自分はVSTARパワーを1回しか使えない。］",
				'zh-tw': "這個回合結束後，再開始1次自己的回合。[對戰中，己方只可使用1次【VSTAR】力量。]",
				'th-th': "เมื่อจบเทิร์นนี้ เริ่มเทิร์นฝ่ายเราได้อีกครั้ง {ในระหว่างการแบตเทิล ฝ่ายเราใช้พลัง【VSTAR】ได้ 1 ครั้งเท่านั้น}",
			},
		},
	],

	weaknesses: [{ type: "Fire", value: "x2" }],
	resistances: [{ type: "Grass", value: "-30" }],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 687663,
				tcgplayer: 571639,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "nullV",
	},

	retreat: 3,
	regulationMark: "F",
	rarity: "Triple Rare",
	dexId: [483],
};

export default card;
