import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "イーブイ",
		'zh-tw': "伊布",
		th: "อีวุย",
		id: "Eevee"
	},

	illustrator: "Narumi Sato",
	rarity: "Common",
	category: "Pokemon",
	dexId: [133],
	hp: 70,
	types: ["Colorless"],

	description: {
		ja: "環境の 変化に すぐさま 合わせられるよう いくつもの 進化の 可能性を 秘めている。",
		'zh-tw': "為了能瞬即適應環境的變化，這種寶可夢蘊含著 許多種進化的可能性。",
		th: "มีความสามารถพิเศษในการวิวัฒนาการอย่างหลากหลายเพื่อปรับตัวให้เข้ากับการเปลี่ยนแปลงของสิ่งแวดล้อมได้อย่างทันที",
		id: "Eevee berpotensi untuk berevolusi ke berbagai macam wujud untuk segera dapat beradaptasi terhadap perubahan lingkungan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "カラフルフレンズ",
			'zh-tw': "鮮豔友情",
			th: "คัลเลอร์ฟูลเฟรนส์",
			id: "Colorful Friends"
		},

		effect: {
			ja: "自分の山札から、それぞれちがうタイプのポケモンを3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張各不同屬性的寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอนที่แต่ละใบต่างประเภทกันได้สูงสุด 3 ใบ จากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 3 lembar Pokémon yang masing-masing berbeda tipenya dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Colorless"],

		name: {
			ja: "スキップ",
			'zh-tw': "小跳步",
			th: "กระโดดข้าม",
			id: "Skip"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card