import { Card } from "models/database/card";
import Set from "../SV2a";

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "マルマイン",
		'zh-tw': "頑皮雷彈",
		'th-th': "มารุมายน์",
		'id-id': "Electrode",
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 90,
	types: ["Lightning"],

	description: {
		'ja-jp': "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
		'zh-tw': "雖然儲存的電能越多，移動的速度也會變得越快， 但同時也會變得更容易爆炸。",
		'th-th': "ยิ่งสะสมพลังงานไฟฟ้ามากเท่าไหร่ยิ่งเคลื่อนไหวได้เร็ว แต่ก็จะระเบิดง่ายขึ้นด้วย",
		'id-id': "Makin banyak energi listrik yang disimpan, Electrode dapat bergerak dengan kecepatan tinggi. Namun, Pokémon ini juga menjadi lebih mudah untuk meledak.",
	},

	stage: "Stage1",

	attacks: [
		{
			name: {
				'ja-jp': "ボムボムチェイン",
				'zh-tw': "轟轟連鎖",
				'th-th': "บอมบ์บอมบ์เชน",
				'id-id': "Bomb Bomb Chain",
			},
			damage: "20+",
			cost: ["Lightning"],
			effect: {
				'ja-jp': "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。",
				'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」卡丟棄，增加其張數×40點傷害。",
				'th-th': "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราที่ตำแหน่งทิ้งการ์ดตามจำนวนที่ชอบ แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x40",
				'id-id': "Sebelum memberikan kerusakan, buang sesukanya Pokémon Tool yang dikenakan pada Pokémon di Arena sendiri ke Trash, kerusakan yang diberikan bertambah sejumlah 40 untuk tiap lembarnya.",
			},
		},
		{
			name: {
				'ja-jp': "エレキボール",
				'zh-tw': "電球",
				'th-th': "อิเล็กทริกบอล",
				'id-id': "Electro Ball",
			},
			damage: 70,
			cost: ["Lightning", "Colorless"],
		},
	],

	weaknesses: [{ type: "Fighting", value: "x2" }],
	resistances: [],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 719554,
			},
		},
		{
			type: "reverse",
			foil: "pokeball",
			thirdParty: {
				cardmarket: 837430,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				cardmarket: 837431,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ビリリダマ",
	},

	retreat: 1,
	regulationMark: "G",
	rarity: "Rare",
	dexId: [101],
};

export default card;
