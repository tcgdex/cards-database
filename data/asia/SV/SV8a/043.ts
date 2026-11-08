import { Card } from "models/database/card"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウミトリオ",
		'id-id': "Wugtrio",
		'th-th': "อุมิทริโอ",
		'zh-tw': "三海地鼠",
		'zh-cn': "三海地鼠"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [961],
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "見かけによらず 気性が 荒い。 長い 体で 獲物を 締め上げ 巣穴に 引きずりこむぞ。",
		'id-id': "Berbanding terbalik dengan penampilannya, sifat Wugtrio kasar. Dengan tubuh panjangnya, Pokémon ini melilit dan menarik mangsa ke dalam sarangnya.",
		'th-th': "มีนิสัยโหดร้ายขัดกับรูปลักษณ์ภายนอก ใช้ร่างกายที่ยาวของมันกอดรัดเหยื่อและลากเข้าไปในรัง",
		'zh-tw': "有別於外表，性格非常粗暴。 會用長長的身體勒緊獵物， 然後拖進自己的巢穴裡。",
		'zh-cn': "有別於外表，性格非常粗暴。 會用長長的身體勒緊獵物， 然後拖進自己的巢穴裡。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "でたとこチョイス",
			'id-id': "Pilihan Masuk Spontan",
			'th-th': "เลือกฉับพลัน",
			'zh-tw': "臨場選擇",
			'zh-cn': "臨場選擇"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分の山札から「ポケモンのどうぐ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			'id-id': "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 3 lembar Pokémon Tool dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			'th-th': "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ใช้ได้ 1 ครั้ง เลือกการ์ด [ไอเท็มติดโปเกมอน] ได้สูงสุด 3 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多3張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。從自己的牌庫選擇最多3張「寶可夢道具」卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			'ja-jp': "さんれんのムチ",
			'id-id': "Cambuk Tiga Kali",
			'th-th': "ฟาดแส้สามครั้ง",
			'zh-tw': "三連鞭",
			'zh-cn': "三連鞭"
		},

		damage: "70×",

		effect: {
			'ja-jp': "コインを3回投げ、オモテの数×70ダメージ。",
			'id-id': "Lempar koin 3 kali. Serangan ini memberikan kerusakan sejumlah 70 untuk tiap lemparan dengan hasil sisi depan.",
			'th-th': "ทอยเหรียญ 3 ครั้ง แดเมจจะเท่ากับจำนวนครั้งที่ออกหัว x70",
			'zh-tw': "擲3次硬幣，造成正面出現的次數×70點傷害。",
			'zh-cn': "擲3次硬幣，造成正面出現的次數×70點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 803156,
				tcgplayer: 602392,
			},
		},
		{
			type: "reverse",
			foil: "masterball",
			thirdParty: {
				tcgplayer: 604533,
			},
		},
		{
			type: "reverse",
			thirdParty: {
				tcgplayer: 602393,
			},
		},
	],

	retreat: 2,
	regulationMark: "G"
}

export default card