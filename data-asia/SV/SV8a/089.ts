import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルー",
		id: "Ting-Lu",
		th: "ติ่งลู่",
		'zh-tw': "古鼎鹿",
		'zh-cn': "古鼎鹿"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "None",
	category: "Pokemon",
	dexId: [1003],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "古の 儀式で 使われた 器に 注がれた 恐怖が 土石を まとい ポケモンとなった。",
		id: "Ting-Lu adalah rasa takut yang tertuang pada wadah yang digunakan dalam ritual kuno. Ia menyelimuti dirinya dengan tanah dan batu, lalu berubah menjadi Pokémon.",
		th: "ความหวาดกลัวที่โดนเทลงในภาชนะที่ใช้ในพิธีกรรมเก่าแก่ถูกห่อหุ้มด้วยดินและหิน จนกลายเป็นโปเกมอน",
		'zh-tw': "古老儀式用的容器中注入的 恐懼把土石裹在自己身上， 變成了寶可夢。",
		'zh-cn': "古老儀式用的容器中注入的 恐懼把土石裹在自己身上， 變成了寶可夢。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "サンドブリング",
			id: "Sand Bring",
			th: "เบิกทราย",
			'zh-tw': "沙之到來",
			'zh-cn': "沙之到來"
		},

		effect: {
			ja: "自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモン1匹につける。",
			id: "Pilih paling banyak 2 lembar Energi Dasar {Petarung} dari Trash sendiri, lalu kenakan pada 1 Pokémon sendiri.",
			th: "เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 2 ใบจากตำแหน่งทิ้งการ์ดฝ่ายเรา ติดที่โปเกมอนฝ่ายเรา 1 ตัว",
			'zh-tw': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於自己的1隻寶可夢身上。",
			'zh-cn': "從自己的棄牌區選擇最多2張「基本【鬥】能量」卡，附於自己的1隻寶可夢身上。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Fighting"],

		name: {
			ja: "ごうまんインパクト",
			id: "Hantaman Kecongkakan",
			th: "อวดดีพุ่งชน",
			'zh-tw': "傲慢衝擊",
			'zh-cn': "傲慢衝擊"
		},

		damage: 220,

		effect: {
			ja: "このポケモンにダメカンが4個以上のっているなら、このワザは失敗。",
			id: "Jika Pokémon ini memiliki Token Kerusakan sejumlah 4 atau lebih, serangan ini gagal.",
			th: "ถ้าโปเกมอนนี้มีตัวนับแดเมจวางอยู่มากกว่าหรือเท่ากับ 4 ตัว ท่าต่อสู้นี้จะล้มเหลว",
			'zh-tw': "若這隻寶可夢身上放置有4個以上的傷害指示物，則這個招式失敗。",
			'zh-cn': "若這隻寶可夢身上放置有4個以上的傷害指示物，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "G"
}

export default card