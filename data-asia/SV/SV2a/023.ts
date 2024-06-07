import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "アーボ",
		'zh-tw': "阿柏蛇",
		th: "อาร์โบ",
		id: "Ekans"
	},

	illustrator: "Kedamahadaitai Yawarakai",
	rarity: "Common",
	category: "Pokemon",
	dexId: [23],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "とりポケモンの タマゴが 好物。 噛まずに 丸呑みするので 喉が 詰まって 気を 失うことも。",
		'zh-tw': "最愛吃鳥寶可夢的蛋。 因為總是不咀嚼就整個吞下， 有時會被噎住而昏倒。",
		th: "ของโปรดคือไข่ของโปเกมอนนก เนื่องจากชอบกลืนเข้าไปทั้งคำโดยไม่เคี้ยว บางครั้งจึงติดคอจนหมดสติไป",
		id: "Telur Pokémon burung adalah makanan favorit Ekans. Kadang Pokémon ini menelan telur tanpa mengunyahnya, sehingga pingsan karena telur tersangkut di kerongkongannya."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "アシッドボム",
			'zh-tw': "酸液炸彈",
			th: "ระเบิดกรด",
			id: "Semprotan Asam"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card