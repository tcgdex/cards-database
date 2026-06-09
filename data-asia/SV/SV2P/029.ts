import { Card } from "../../../interfaces"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドン",
		'zh-tw': "呆呆獸",
		th: "ยาดง",
		id: "Slowpoke"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "動きが のろく 間抜け。 叩かれても ５秒 たってから 痛さを 感じるほどだ。",
		'zh-tw': "動作遲鈍且呆頭呆腦。就算挨打也得花上５秒 才會感受到疼痛。",
		th: "อืดอาดและซื่อบื้อ ถึงขั้นว่าถูกตีไป 5 วินาทีถึงเพิ่งรู้สึกเจ็บ",
		id: "Slowpoke lamban dan lemot. Pokémon ini baru merasakan rasa sakit akibat dipukul setelah 5 detik berlalu."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "しっぽづり",
			'zh-tw': "尾釣",
			th: "หางตกเบ็ด",
			id: "Ekor Pancing"
		},

		effect: {
			ja: "コインを1回投げオモテなら、自分の山札から好きなカードを1枚選び、手札に加える。そして山札を切る。ウラなら、自分の手札を1枚選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則從自己的牌庫任意選擇1張卡加入手牌。並且重洗牌庫。若為反面，則選擇1張自己的手牌，將其丟棄。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกการ์ดที่ชอบ 1 ใบจากสำรับการ์ดฝ่ายเรา นำขึ้นมือ แล้วสับสำรับการ์ด ถ้าออกก้อย เลือกการ์ดบนมือฝ่ายเรา 1 ใบ ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 kartu sesukanya dari Deck sendiri, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck. Jika hasilnya sisi belakang, pilih 1 lembar Kartu Pegangan sendiri, lalu buang ke Trash."
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "しねんのずつき",
			'zh-tw': "意念頭錘",
			th: "ท่าโขกหัวพลังจิต",
			id: "Sundulan Spiritual"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 705262
	}
}

export default card