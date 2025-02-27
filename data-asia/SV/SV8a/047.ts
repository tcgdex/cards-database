import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノツツミ",
		id: "Iron Bundle",
		th: "ถุงเหล็ก",
		'zh-tw': "鐵包袱",
		'zh-cn': "鐵包袱"
	},

	illustrator: "Lee HyunJung",
	rarity: "None",
	category: "Pokemon",
	dexId: [991],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。",
		id: "Pokémon yang mirip dengan objek misterius yang terdaftar dalam sebuah buku kuno. Hanya terdapat 2 laporan kesaksian atas Pokémon ini.",
		th: "เป็นโปเกมอนที่มีความคล้ายคลึงกับวัตถุลึกลับที่ปรากฏในบันทึกเก่าแก่ ในอดีตมีข้อมูลว่ามีผู้พบเห็นเพียง 2 ครั้งเท่านั้น",
		'zh-tw': "與古書裡記載的神秘物體 長得很相像的寶可夢。 過去只被目擊過２次。",
		'zh-cn': "與古書裡記載的神秘物體 長得很相像的寶可夢。 過去只被目擊過２次。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハイパーブロアー",
			id: "Hyper Blower",
			th: "ไฮเปอร์โบลเวอร์",
			'zh-tw': "高級出風機",
			'zh-cn': "高級出風機"
		},

		effect: {
			ja: "このポケモンがベンチにいるなら、自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、このポケモンと、ついているすべてのカードを、トラッシュする。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika Pokémon ini ada di Cadangan. Tukar Pokémon Bertarung lawan dengan Pokémon Cadangan. (Pokémon yang akan dimasukkan ke Arena Bertarung dipilih oleh lawan.) Setelah itu, buang Pokémon ini dan semua kartu yang dikenakannya ke Trash.",
			th: "ถ้าโปเกมอนนี้อยู่บนเบนช์ ใช้ได้ 1 ครั้งในเทิร์นฝ่ายเรา สลับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามกับโปเกมอนบนเบนช์ (ฝ่ายตรงข้ามเลือกโปเกมอนที่จะวางบนตำแหน่งต่อสู้) หลังจากนั้น ทิ้งโปเกมอนนี้ และการ์ดทั้งหมดที่ติดอยู่ ที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換（由對手選擇放置於戰鬥場的寶可夢）。然後，將這隻寶可夢與附加的卡全部丟棄。",
			'zh-cn': "若這隻寶可夢在備戰區，則在自己的回合時可使用1次。將對手的戰鬥寶可夢與備戰寶可夢互換（由對手選擇放置於戰鬥場的寶可夢）。然後，將這隻寶可夢與附加的卡全部丟棄。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "れいきゃくジェット",
			id: "Jet Pendingin",
			th: "ไอพ่นคลายร้อน",
			'zh-tw': "冷卻噴射",
			'zh-cn': "冷卻噴射"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このワザを受けた進化ポケモンは、ワザが使えない。",
			id: "Pada giliran lawan berikutnya, Pokémon Evolusi yang menerima serangan ini tidak dapat menggunakan serangan.",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนวิวัฒนาการที่ได้รับท่าต่อสู้นี้ จะใช้ท่าต่อสู้ไม่ได้",
			'zh-tw': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。",
			'zh-cn': "在下個對手的回合，受到這個招式的進化寶可夢無法使用招式。"
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