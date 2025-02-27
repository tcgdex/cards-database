import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ネイティオ",
		id: "Xatu",
		th: "เนทิโอ",
		'zh-tw': "天然鳥",
		'zh-cn': "天然鳥"
	},

	illustrator: "GOSSAN",
	rarity: "None",
	category: "Pokemon",
	dexId: [178],
	hp: 100,
	types: ["Psychic"],

	description: {
		ja: "過去と 未来を 見通せる。 毎日 太陽の 動きを 見続けている 不思議な ポケモン。",
		id: "Xatu melihat masa lalu dan masa depan. Pokémon misterius yang setiap hari terus melihat pergerakan matahari.",
		th: "โปเกมอนแปลก ๆ ที่มองทะลุได้ทั้งอดีตและปัจจุบัน ทุกวันจะเฝ้ามองการเคลื่อนที่ของดวงอาทิตย์อยู่ตลอด",
		'zh-tw': "能夠看穿過去和未來。 日復一日注視著太陽 動向的奇異寶可夢。",
		'zh-cn': "能夠看穿過去和未來。 日復一日注視著太陽 動向的奇異寶可夢。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アカシックセンス",
			id: "Akashic Sense",
			th: "สัมผัสซิกซ์เซนส์",
			'zh-tw': "虛寂意識",
			'zh-cn': "虛寂意識"
		},

		effect: {
			ja: "自分の番に1回使える。自分の手札から「基本エネルギー」を1枚選び、ベンチポケモンにつける。その後、自分の山札を2枚引く。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Pilih 1 lembar Energi Dasar {Psychic} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon Cadangan. Setelah itu, ambil 2 kartu dari atas Deck sendiri.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา เลือกการ์ด [พลังงานพื้นฐาน[พลังจิต]] 1 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนบนเบนช์ หลังจากนั้น จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'zh-tw': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【超】能量」卡，附於備戰寶可夢身上。然後，從自己的牌庫抽出2張卡。",
			'zh-cn': "在自己的回合時可使用1次。從自己的手牌選擇1張「基本【超】能量」卡，附於備戰寶可夢身上。然後，從自己的牌庫抽出2張卡。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ちょうねんりき",
			id: "Psikokinesis Super",
			th: "ซูเปอร์โทรจิต",
			'zh-tw': "超念力",
			'zh-cn': "超念力"
		},

		damage: 80
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card