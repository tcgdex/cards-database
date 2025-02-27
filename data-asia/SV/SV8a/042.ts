import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミディグダ",
		id: "Wiglett",
		th: "อุมิดิกดา",
		'zh-tw': "海地鼠",
		'zh-cn': "海地鼠"
	},

	illustrator: "OKUBO",
	rarity: "None",
	category: "Pokemon",
	dexId: [960],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		id: "Wiglett dapat mencium bau yang dikeluarkan Veluza yang berada dalam jarak 20 m, lalu bersembunyi di dalam pasir.",
		th: "จะหลบซ่อนตัวในทรายเมื่อได้กลิ่นที่มิกาลูซาปล่อยออกมาแม้จะห่างออกไปกว่า 20 เมตร",
		'zh-tw': "就算身處於２０公尺外， 牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。",
		'zh-cn': "就算身處於２０公尺外， 牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ほりだしもの",
			id: "Barang yang Menguntungkan",
			th: "ของเลหลัง",
			'zh-tw': "挖到寶",
			'zh-cn': "挖到寶"
		},

		effect: {
			ja: "自分の山札からグッズを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			id: "Pilih 1 lembar Item dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			th: "เลือกการ์ดไอเท็ม 1 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-tw': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "從自己的牌庫選擇1張物品卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "アクアボム",
			id: "Aqua Bomb",
			th: "อควาบอมบ์",
			'zh-tw': "水炸彈",
			'zh-cn': "水炸彈"
		},

		damage: 40,

		effect: {
			ja: "このポケモンにも20ダメージ。",
			id: "Pokémon ini juga menerima kerusakan sejumlah 20.",
			th: "โปเกมอนนี้ก็จะได้รับแดเมจ 20 ด้วย",
			'zh-tw': "這隻寶可夢也受到20點傷害。",
			'zh-cn': "這隻寶可夢也受到20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card