import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "カメックスex",
		'zh-tw': "水箭龜ex",
		'th-th': "คาเม็กซ์ex",
		'id-id': "Blastoise ex",
	},

	illustrator: "PLANETA Yamashita",
	category: "Pokemon",
	hp: 330,
	types: ["Water"],

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'ja-jp': "かたいこうら",
				'zh-tw': "堅硬甲殼",
				'th-th': "กระดองสุดแข็ง",
				'id-id': "Tempurung Padat",
			},
			effect: {
				'ja-jp': "このポケモンが受けるワザのダメージは「-30」される。",
				'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
				'th-th': "แดเมจของท่าต่อสู้ที่โปเกมอนนี้จะได้รับจะถูก [-30]",
				'id-id': "Kerusakan akibat serangan yang diterima Pokémon ini berkurang sejumlah 30.",
			},
		},
	],

	attacks: [
		{
			name: {
				'ja-jp': "ツインカノン",
				'zh-tw': "雙加農炮",
				'th-th': "ทวินแคนนอน",
				'id-id': "Twin Cannon",
			},
			damage: "140×",
			cost: ["Water", "Water"],
			effect: {
				'ja-jp': "自分の手札から「基本[W]エネルギー」を2枚までトラッシュし、その枚数×140ダメージ。",
				'zh-tw': "從自己的手牌將最多2張「基本【水】能量」卡丟棄，造成其張數×140點傷害。",
				'th-th': "ทิ้งการ์ด [พลังงานพื้นฐาน[น้ำ]] ได้สูงสุด 2 ใบจากบนมือฝ่ายเราที่ตำแหน่งทิ้งการ์ด แดเมจจะเท่ากับจำนวนการ์ดนั้น x140",
				'id-id': "Buang paling banyak 2 lembar Energi Dasar {Air} dari Kartu Pegangan sendiri ke Trash, serangan ini memberikan kerusakan sejumlah 140 untuk tiap lembarnya.",
			},
		},
	],

	weaknesses: [{ type: "Lightning", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719639,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "カメール",
	},

	retreat: 3,
	regulationMark: "G",
	rarity: "Ultra Rare",
	dexId: [9],

	suffix: "EX",
};

export default card;
