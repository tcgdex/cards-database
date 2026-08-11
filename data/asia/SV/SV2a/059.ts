import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ウインディ",
		'zh-tw': "風速狗",
		'th-th': "วินดี",
		'id-id': "Arcanine",
	},

	illustrator: "Atsushi Furusawa",
	category: "Pokemon",
	hp: 150,
	types: ["Fire"],

	description: {
		'ja-jp': "草原を 駆け抜ける 様子は 人々の 心を 虜にしたと 昔の 絵巻に 記されていた。",
		'zh-tw': "根據過去的畫軸記載，牠在草原上奔馳的姿態 擄獲了眾多人心。",
		'th-th': "ม้วนภาพสมัยก่อนแสดงให้เห็นถึงท่วงท่าวิ่งฝ่าทุ่งหญ้าของมันที่สะกดตาต้องใจผู้พบเห็น",
		'id-id': "Dalam gulungan gambar kuno tertera bahwa hati orang-orang terpikat saat melihat sosok Arcanine yang berlari di padang rumput.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "あつくたぎる",
				'zh-tw': "熾熱沸騰",
				'th-th': "เดือดพล่าน",
				'id-id': "Menggelegak Panas",
			},
			damage: 30,
			cost: ["Fire"],
			effect: {
				'ja-jp': "自分のトラッシュから「基本[R]エネルギー」を2枚まで選び、このポケモンにつける。",
				'zh-tw': "從自己的棄牌區選擇最多2張「基本【火】能量」卡，附於這隻寶可夢身上。",
				'th-th': "เลือกการ์ด [พลังงานพื้นฐาน[ไฟ]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนนี้",
				'id-id': "Pilih paling banyak 2 lembar Energi Dasar {Api} dari Trash sendiri, lalu kenakan pada Pokémon ini.",
			},
		},
		{
			name: {
				'ja-jp': "ダイナマイトファング",
				'zh-tw': "炸藥獠牙",
				'th-th': "ไดนาไมต์แฟงก์",
				'id-id': "Dynamite Fang",
			},
			damage: 240,
			cost: ["Fire", "Fire", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "このポケモンについている[R]エネルギーを2個選び、トラッシュする。",
				'zh-tw': "選擇2個這隻寶可夢身上附加的【火】能量，將其丟棄。",
				'th-th': "เลือกพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนนี้ 2 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
				'id-id': "Pilih 2 Energi {Api} yang dikenakan pada Pokémon ini, lalu buang ke Trash.",
			},
		},
	],

	weaknesses: [{ type: "Water", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 719501,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837335,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837336,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ガーディ",
	},

	retreat: 4,
	regulationMark: "G",
	rarity: "Uncommon",
	dexId: [59],
};

export default card;
