import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "マルマイン",
		'zh-tw': "頑皮雷彈",
		th: "มารุมายน์",
		id: "Electrode"
	},

	illustrator: "nagimiso",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [101],
	hp: 90,
	types: ["Lightning"],

	description: {
		ja: "電気エネルギーを 溜めこむほど 高速で 動けるようになるが そのぶん 爆発 しやすい。",
		'zh-tw': "雖然儲存的電能越多，移動的速度也會變得越快， 但同時也會變得更容易爆炸。",
		th: "ยิ่งสะสมพลังงานไฟฟ้ามากเท่าไหร่ยิ่งเคลื่อนไหวได้เร็ว แต่ก็จะระเบิดง่ายขึ้นด้วย",
		id: "Makin banyak energi listrik yang disimpan, Electrode dapat bergerak dengan kecepatan tinggi. Namun, Pokémon ini juga menjadi lebih mudah untuk meledak."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "ボムボムチェイン",
			'zh-tw': "轟轟連鎖",
			th: "บอมบ์บอมบ์เชน",
			id: "Bomb Bomb Chain"
		},

		damage: "20+",

		effect: {
			ja: "ダメージを与える前に、自分の場のポケモンについている「ポケモンのどうぐ」を好きなだけトラッシュし、その枚数×40ダメージ追加。",
			'zh-tw': "在造成傷害前，將自己的場上寶可夢身上附加的任意數量的「寶可夢道具」卡丟棄，增加其張數×40點傷害。",
			th: "ก่อนจะทำแดเมจ ทิ้ง [ไอเท็มติดโปเกมอน] ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราที่ตำแหน่งทิ้งการ์ดตามจำนวนที่ชอบ แดเมจจะเพิ่มตามจำนวนการ์ดนั้น x40",
			id: "Sebelum memberikan kerusakan, buang sesukanya Pokémon Tool yang dikenakan pada Pokémon di Arena sendiri ke Trash, kerusakan yang diberikan bertambah sejumlah 40 untuk tiap lembarnya."
		}
	}, {
		cost: ["Lightning", "Colorless"],

		name: {
			ja: "エレキボール",
			'zh-tw': "電球",
			th: "อิเล็กทริกบอล",
			id: "Electro Ball"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 719554
	}
}

export default card