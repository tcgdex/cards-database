import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "イエッサン",
		'zh-tw': "愛管侍",
		th: "อิเอซซัน",
		id: "Indeedee"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [876],
	hp: 90,
	types: ["Colorless"],

	description: {
		ja: "喜びや 感謝など ハッピーな 気持ちを 求め 人や ポケモンを かいがいしく 世話して まわる。",
		'zh-tw': "為了尋求喜悅和感謝等快樂的心情，會殷勤地 到處找人和寶可夢來照顧。",
		th: "แสวงหาความรู้สึกที่เปี่ยมไปด้วยความสุข เช่น ความปิติยินดี และความขอบคุณ จึงมุ่งมั่นตั้งใจคอยดูแลผู้คนและโปเกมอนเป็นอย่างดี",
		id: "Karena menginginkan emosi senang seperti perasaan bahagia, syukur, dan lainnya, Indeedee berkeliling merawat manusia dan Pokémon dengan baik."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "そだてじょうず",
			'zh-tw': "育兒高手",
			th: "เลี้ยงได้ดี",
			id: "Mahir Memelihara"
		},

		effect: {
			ja: "自分の場のポケモン1匹から進化するカードを、自分の山札から1枚選び、そのポケモンにのせて進化させる。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張自己的1隻場上寶可夢進化而來的卡，放置於那隻寶可夢身上完成進化。並且重洗牌庫。",
			th: "เลือกการ์ดที่จะวิวัฒนาการจากโปเกมอน 1 ตัวบนกระดานฝ่ายเรา 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนโปเกมอนนั้นเพื่อวิวัฒนาการ แล้วสับสำรับการ์ด",
			id: "Pilih 1 kartu dari Deck sendiri yang merupakan evolusi dari 1 Pokémon di Arena sendiri, lalu letakkan pada Pokémon tersebut untuk melakukan evolusi. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "さいみんはどう",
			'zh-tw': "催眠波動",
			th: "คลื่นสะกดจิต",
			id: "Aura Hipnotis"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[หลับ]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Tidur."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card