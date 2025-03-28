import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ノココッチ",
		id: "Dudunsparce",
		th: "โนโกก็อจจิ",
		'zh-tw': "土龍節節",
		'zh-cn': "土龍節節"
	},

	illustrator: "Teeziro",
	rarity: "None",
	category: "Pokemon",
	dexId: [982],
	hp: 140,
	types: ["Colorless"],

	description: {
		ja: "硬い 尻尾で 地中 深くの 岩盤を くり抜き 巣を 作る。 巣穴は 長さ１０キロに およぶ。",
		id: "Dudunsparce membuat sarangnya dengan melubangi batuan dasar jauh di bawah tanah menggunakan ekor kerasnya. Panjang sarangnya mencapai 10 km.",
		th: "ขุดพื้นหินที่อยู่ลึกลงไปในดินด้วยหางสุดแข็งแล้วทำรัง โพรงมีความยาวกว่า 10 กิโลเมตร",
		'zh-tw': "會用堅硬的尾巴挖穿 地下深處的岩盤來築巢。 巢穴可以長達１０公里。",
		'zh-cn': "會用堅硬的尾巴挖穿 地下深處的岩盤來築巢。 巢穴可以長達１０公里。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "にげあしドロー",
			id: "Ambil Kabur",
			th: "จั่วแล้ววิ่งหนี",
			'zh-tw': "逃跑抽出",
			'zh-cn': "逃跑抽出"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札を3枚引く。その後、このポケモンと、ついているすべてのカードを、山札にもどして切る。",
			id: "Dapat digunakan 1 kali pada giliran sendiri. Ambil 3 kartu dari atas Deck sendiri. Setelah itu, kocok kembali Pokémon ini dan semua kartu yang dikenakannya ke Deck.",
			th: "ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา จั่วการ์ด 3 ใบจากสำรับการ์ดฝ่ายเรา หลังจากนั้น นำโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ใส่กลับไปในสำรับการ์ดแล้วสับ",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫抽出3張卡。然後，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。",
			'zh-cn': "在自己的回合時可使用1次。從自己的牌庫抽出3張卡。然後，將這隻寶可夢與附加的卡，全部放回自己的牌庫並重洗。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ランドクラッシュ",
			id: "Land Crush",
			th: "แลนด์ครัช",
			'zh-tw': "大地粉碎",
			'zh-cn': "大地粉碎"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card