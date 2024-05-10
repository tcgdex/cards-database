import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "サーフゴー",
		'zh-tw': "賽富豪",
		th: "ซาร์ฟโก",
		id: "Gholdengo",
		'zh-cn': "賽富豪"
	},

	illustrator: "Mitsuhiro Arita",
	category: "Pokemon",
	dexId: [1000],
	hp: 130,
	types: ["Metal"],

	description: {
		ja: "１０００枚の コインで 体が できているらしい。 人懐こく だれとでも すぐに 仲良くなれる。",
		'zh-tw': "據說身體是由１０００枚硬幣所組成的。喜歡與人親近， 不管與誰都能馬上變得融洽。",
		th: "ดูเหมือนว่าร่างกายจะทำมาจากเหรียญ 1000 เหรียญ เชื่องกับผู้คน สามารถสนิทกับอีกฝ่ายได้อย่างรวดเร็วไม่ว่าจะเป็นใครก็ตาม",
		id: "Kabarnya tubuh Gholdengo terbentuk dari 1000 keping koin. Pokémon ini jinak dan segera menjadi akrab dengan siapa pun.",
		'zh-cn': "據說身體是由１０００枚硬幣所組成的。喜歡與人親近， 不管與誰都能馬上變得融洽。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おおばんぶるまい",
			'zh-tw': "盛宴招待",
			th: "หน้าใหญ่ใจสปอร์ต",
			id: "Berbagi Melimpah Ruah",
			'zh-cn': "盛宴招待"
		},

		effect: {
			ja: "自分の手札から「基本エネルギー」を好きなだけ選び、自分のポケモンに好きなようにつける。",
			'zh-tw': "從自己的手牌選擇任意數量的「基本【鋼】能量」卡，以任意方式附於自己的寶可夢身上。",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[โลหะ]] จากบนมือฝ่ายเราตามจำนวนที่ชอบ ติดที่โปเกมอนฝ่ายเราตามชอบ",
			id: "Pilih sesukanya Energi Dasar {Logam} dari Kartu Pegangan sendiri, lalu kenakan sesukanya pada Pokémon sendiri.",
			'zh-cn': "從自己的手牌選擇任意數量的「基本【鋼】能量」卡，以任意方式附於自己的寶可夢身上。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "ゴージャスサーフ",
			'zh-tw': "豪華衝浪",
			th: "กอร์เจียสเซิร์ฟ",
			id: "Gorgeous Surf",
			'zh-cn': "豪華衝浪"
		},

		damage: "80×",

		effect: {
			ja: "このポケモンについているエネルギーの数ぶんコインを投げ、オモテの数×80ダメージ。",
			'zh-tw': "擲與這隻寶可夢身上附加的【鋼】能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。",
			th: "ทอยเหรียญตามจำนวนพลังงาน[โลหะ]ที่ติดอยู่กับโปเกมอนนี้ แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x80",
			id: "Lempar koin untuk tiap Energi {Logam} yang dikenakan pada Pokémon ini. Serangan ini memberikan kerusakan sejumlah 80 untuk tiap lemparan dengan hasil sisi depan.",
			'zh-cn': "擲與這隻寶可夢身上附加的【鋼】能量的數量相同次數的硬幣，造成正面出現的次數×80點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card