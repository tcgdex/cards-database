import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "イワーク",
		'zh-tw': "大岩蛇",
		'th-th': "อิวาร์ค",
		'id-id': "Onix",
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'ja-jp': "大きく 丈夫な 体を くねらせ よじらせ 時速８０キロで 地面を 勢いよく 掘り進む。",
		'zh-tw': "彎曲扭動巨大結實的身體，以時速８０公里的 猛烈勢頭挖掘前進。",
		'th-th': "บิดร่างกายที่ใหญ่และแข็งแรงให้โค้งงอเป็นเกลียวขุดเจาะพื้นดินลงไปอย่างรวดเร็วด้วยความเร็ว 80 กิโลเมตรต่อชั่วโมง",
		'id-id': "Onix menggali lubang secara bersemangat pada kecepatan 80 km/jam dengan menggoyang dan meliukkan tubuhnya yang besar dan kuat.",
	},

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "どっすんなだれ",
				'zh-tw': "轟隆崩塌",
				'th-th': "ทลายครืน",
				'id-id': "Longsoran Dentum",
			},
			damage: "80×",
			cost: ["Colorless", "Colorless"],
			effect: {
				'ja-jp': "自分の山札を上から5枚トラッシュし、その中にあるにげるためのエネルギーが4個のポケモンの枚数×80ダメージ。",
				'zh-tw': "將自己的牌庫上方5張卡丟棄，造成其中【撤退】所需的能量為4個的寶可夢卡的張數×80點傷害。",
				'th-th': "ทิ้งการ์ด 5 ใบจากด้านบนของสำรับการ์ดฝ่ายเราที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดโปเกมอนที่มีพลังงานสำหรับ[หนี] 4 ลูกที่อยู่ในนั้น x80",
				'id-id': "Buang 5 kartu dari atas Deck sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 80 untuk tiap lembar Pokémon yang membutuhkan 4 Energi untuk Mundur yang ada di antaranya.",
			},
		},
		{
			name: {
				'ja-jp': "ヘビーインパクト",
				'zh-tw': "重磅衝擊",
				'th-th': "เฮวี่อิมแพ็คท์",
				'id-id': "Heavy Impact",
			},
			damage: 100,
			cost: ["Fighting", "Fighting", "Colorless", "Colorless"],
		},
	],

	weaknesses: [{ type: "Grass", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719548,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837418,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837419,
			},
		},
	],

	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [95],
};

export default card;
