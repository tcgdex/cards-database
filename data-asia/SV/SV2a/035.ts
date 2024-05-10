import { Card } from "../../../interfaces"
import Set from "../SV2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ピッピ",
		'zh-tw': "皮皮",
		th: "ปิปปี",
		id: "Clefairy"
	},

	illustrator: "ryoma uratsuka",
	rarity: "Common",
	category: "Pokemon",
	dexId: [35],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "愛くるしい しぐさと 鳴き声で かわいいと 大人気の ポケモン。 だが めったに 見つからない。",
		'zh-tw': "因可愛的舉止和叫聲而廣受歡迎的寶可夢。 不過很少被人發現。",
		th: "เป็นโปเกมอนน่ารักที่ได้รับความนิยมเป็นอย่างมากเพราะมีลักษณะท่าทางและเสียงร้องที่น่าเอ็นดู แต่แทบจะไม่ค่อยได้พบเห็น",
		id: "Pokémon dengan tingkah dan suaranya yang imut-imut ini populer karena kemanisannya. Akan tetapi, Clefairy sulit untuk ditemukan."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "つきみにさそう",
			'zh-tw': "邀請月見",
			th: "ชวนชมจันทร์",
			id: "Mengundang Memandang Bulan"
		},

		effect: {
			ja: "自分の山札から「ピッピ」を3枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多3張「皮皮」，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ด [ปิปปี] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 3 lembar Clefairy dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ひらてうち",
			'zh-tw': "掌擊",
			th: "ฝ่ามือตบ",
			id: "Tampar"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card