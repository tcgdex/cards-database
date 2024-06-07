import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ワンリキー",
		'zh-tw': "腕力",
		th: "วันริกี",
		id: "Machop"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Common",
	category: "Pokemon",
	dexId: [66],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "いつも パワフル。 体力が 有り余っているので 暇つぶしに 岩を持ち上げ さらに 強くなる。",
		'zh-tw': "時時刻刻都充滿力量。由於體力過剩而去舉岩石 消磨時間，也因此變得更強。",
		th: "มีพละกำลังเต็มเปี่ยมอยู่ตลอด มีกำลังเหลือเฟือก็เลยยกหินขึ้นเพื่อฆ่าเวลาและทำให้ตัวเองแข็งแกร่งยิ่งขึ้น",
		id: "Machop selalu penuh kekuatan. Karena vitalitasnya yang berlebihan, Pokémon ini mengangkat batu besar untuk membuang waktu, sehingga menjadi makin kuat."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "やまたたき",
			'zh-tw': "敲山",
			th: "ทุบภูเขา",
			id: "Menghantam Gunung"
		},

		effect: {
			ja: "相手の山札を上から1枚トラッシュする。",
			'zh-tw': "將對手的牌庫上方1張卡丟棄。",
			th: "ทิ้งการ์ด 1 ใบจากด้านบนของสำรับการ์ดฝ่ายตรงข้ามที่ตำแหน่งทิ้งการ์ด",
			id: "Buang 1 kartu dari atas Deck lawan ke Trash."
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "パンチ",
			'zh-tw': "出拳",
			th: "หมัด",
			id: "Pukulan"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card