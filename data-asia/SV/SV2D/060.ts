import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "リキキリン",
		'zh-tw': "奇麒麟",
		th: "ริกิคิริน",
		id: "Farigiraf"
	},

	illustrator: "Kouki Saitou",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [981],
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "頭と 尻尾の ２つの 脳波が 同期したことで エスパーパワーは キリンリキの １０倍 アップした。",
		'zh-tw': "透過同步頭部和尾巴的腦波，使得牠的超能力提升到了 有麒麟奇的１０倍之高。",
		th: "คลื่นสมองทั้งสองของหัวกับหางเชื่อมต่อกัน ทำให้มีพลังจิตมากกว่าคิรินริกิ 10 เท่า",
		id: "Kekuatan psikokinesis Farigiraf meningkat 10 kali lipat lebih kuat dari Girafarig karena dua gelombang otak dari kepala dan ekornya telah melakukan sinkronisasi."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "どっちかフェイス",
			'zh-tw': "任一頭",
			th: "หน้าใดหน้าหนึ่ง",
			id: "Wajah Yang Mana"
		},

		effect: {
			ja: "自分または相手のどちらかを選び、選ばれたプレイヤーは、手札をすべて山札にもどして切る。その後、選ばれたプレイヤーは山札を4枚引く。",
			'zh-tw': "選擇自己或者對手任一方，被選擇的玩家將手牌全部放回牌庫並重洗。然後，被選擇的玩家從牌庫抽出4張卡。",
			th: "เลือกผู้เล่นฝ่ายเราหรือฝ่ายตรงข้ามฝ่ายใดฝ่ายหนึ่ง ผู้เล่นที่ถูกเลือก นำการ์ดบนมือทั้งหมดใส่กลับไปในสำรับการ์ดแล้วสับ หลังจากนั้น ผู้เล่นที่ถูกเลือกจั่วการ์ด 4 ใบจากสำรับการ์ด",
			id: "Pilih salah satu antara pemain sendiri atau lawan, pemain yang telah dipilih mengocok kembali semua Kartu Pegangan ke Deck. Setelah itu, pemain yang telah dipilih mengambil 4 kartu dari atas Deck."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パワービーム",
			'zh-tw': "強力光束",
			th: "พาวเวอร์บีม",
			id: "Power Beam"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card