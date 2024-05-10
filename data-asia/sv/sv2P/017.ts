import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "マリルリ",
		'zh-tw': "瑪力露麗",
		th: "มาริลลิ",
		id: "Azumarill"
	},

	illustrator: "En Morikura",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [184],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "長い 耳は 優れた センサー。 水の中の 音を 聞き分けて なにが 動いているのか わかる。",
		'zh-tw': "長長的耳朵是靈敏的感應器。能夠藉著聆聽水中的聲音 來分辨出是什麼在動。",
		th: "หูยาว ๆ เป็นเซนเซอร์ชั้นเยี่ยม สามารถแยกแยะเสียงในน้ำและระบุได้ว่าอะไรกำลังเคลื่อนไหว",
		id: "Telinga panjang Azumarill adalah sensor yang luar biasa. Dengan mendengar suara di dalam air, Pokémon ini mengetahui apa yang bergerak di situ."
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン",
			'zh-tw': "泡沫吸取",
			th: "บับเบิลเดรน",
			id: "Bubble Drain"
		},

		damage: 50,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "たたきつける",
			'zh-tw': "摔打",
			th: "ฟาดผัวะ",
			id: "Membanting"
		},

		damage: "100×",

		effect: {
			ja: "コインを2回投げ、オモテの数×100ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×100點傷害。",
			th: "ทอยเหรียญ 2 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x100",
			id: "Lempar koin 2 kali. Serangan ini memberikan kerusakan sejumlah 100 untuk tiap lemparan dengan hasil sisi depan."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card