import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "ガルーラex",
		'zh-tw': "袋獸ex",
		'th-th': "การูราex",
		'id-id': "Kangaskhan ex",
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	hp: 230,
	types: ["Colorless"],

	stage: "Basic",

	attacks: [
		{
			name: {
				'ja-jp': "トリプルドロー",
				'zh-tw': "三重抽出",
				'th-th': "ทริปเปิ้ลดรอว์",
				'id-id': "Triple Draw",
			},
			cost: ["Colorless"],
			effect: {
				'ja-jp': "自分の山札を3枚引く。",
				'zh-tw': "從自己的牌庫抽出3張卡。",
				'th-th': "จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา",
				'id-id': "Ambil 3 kartu dari atas Deck sendiri.",
			},
		},
		{
			name: {
				'ja-jp': "マシンガンパンチ",
				'zh-tw': "機關槍拳",
				'th-th': "แมชชีนกันพันช์",
				'id-id': "Machinegun Punch",
			},
			damage: "100×",
			cost: ["Colorless", "Colorless", "Colorless"],
			effect: {
				'ja-jp': "コインを4回投げ、オモテの数×100ダメージ。",
				'zh-tw': "擲4次硬幣，造成正面出現的次數×100點傷害。",
				'th-th': "ทอยเหรียญ 4 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100",
				'id-id': "Lempar koin 4 kali. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan.",
			},
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719568,
			},
		},
	],

	retreat: 2,
	regulationMark: "G",
	rarity: "Double rare",
	dexId: [115],

	suffix: "EX",
};

export default card;
