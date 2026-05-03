import { Card } from "../../../interfaces"
import Set from "../SV1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドラン",
		'zh-tw': "呆殼獸",
		th: "ยาโดรัน",
		id: "Slowbro"
	},

	illustrator: "Shinji Kanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [80],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "激しい 戦いで 尻尾に 噛みついた シェルダーが 外れると もとの ヤドンに 戻ってしまう。",
		'zh-tw': "在激烈的戰鬥中，如果咬著自己尾巴的大舌貝 脫落，就會變回呆呆獸。",
		th: "พอต่อสู้รุนแรงจนเชลเดอร์ที่งับหางอยู่หลุดไป จะกลับไปเป็นยาดงเหมือนเดิม",
		id: "Dalam pertarungan sengit, Slowbro akan kembali menjadi Slowpoke jika Shellder yang menggigit ekornya lepas."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へんなこうどう",
			'zh-tw': "混亂行動",
			th: "พฤติกรรมแปลก",
			id: "Perilaku Aneh"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の場のポケモンにのっているダメカンを1個選び、このポケモンにのせ替える。",
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個放置於自己的場上寶可夢身上的傷害指示物，改放於這隻寶可夢身上。",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกตัวนับแดเมจที่วางอยู่บนโปเกมอนบนกระดานฝ่ายเรา 1 ตัว ย้ายมาวางที่โปเกมอนนี้",
			id: "Dapat digunakan berkali-kali pada giliran sendiri. Pilih 1 Token Kerusakan yang dimiliki Pokémon di Arena sendiri, lalu pindahkan ke Pokémon ini."
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン",
			'zh-tw': "泡沫吸取",
			th: "บับเบิลเดรน",
			id: "Bubble Drain"
		},

		damage: 60,

		effect: {
			ja: "このポケモンのHPを「30」回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP。",
			th: "ฟื้นฟู HP ของโปเกมอนนี้ [30]",
			id: "Pulihkan HP Pokémon ini sejumlah 30."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G",

	thirdParty: {
		cardmarket: 693094
	}
}

export default card