import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ウミディグダ",
		'zh-tw': "海地鼠",
		th: "อุมิดิกดา",
		id: "Wiglett"
	},

	illustrator: "Tika Matsuno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [960],
	hp: 60,
	types: ["Water"],

	description: {
		ja: "２０メートル先の ミガルーサが 放つ 匂いも 嗅ぎとって 砂の中に 身を 隠すのだ。",
		'zh-tw': "就算身處於２０公尺外，牠都能嗅出輕身鱈散發出 的氣味，躲進沙子裡面藏身。",
		th: "จะหลบซ่อนตัวในทรายเมื่อได้กลิ่นที่มิกาลูซาปล่อยออกมาแม้จะห่างออกไปกว่า 20 เมตร",
		id: "Wiglett dapat mencium bau yang dikeluarkan Veluza yang berada dalam jarak 20 meter, lalu bersembunyi di dalam pasir."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ちょっとほる",
			'zh-tw': "挖一下",
			th: "ขอขุดหน่อย",
			id: "Gali Sedikit"
		},

		effect: {
			ja: "コインを1回投げオモテなら、相手の山札を上から1枚トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的牌庫上方1張卡丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, buang 1 kartu dari atas Deck lawan ke Trash."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ぶつかる",
			'zh-tw': "衝撞",
			th: "กระแทก",
			id: "Menyeruduk"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card