import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガチグマ アカツキ",
		id: "Ursaluna Bulan Merah",
		th: "กาจิกุมะ พระจันทร์สีเลือด",
		'zh-tw': "月月熊 赫月",
		'zh-cn': "月月熊 赫月"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "None",
	category: "Pokemon",
	dexId: [901],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "鉄のように 硬い 泥で 身を 守り 闇を 見通す 左目を 持つ 特別な ガチグマ。",
		id: "Ursaluna khusus yang melindungi tubuhnya dengan lumpur sekeras besi dan memiliki mata kiri yang dapat melihat tembus kegelapan.",
		th: "กาจิกุมะพิเศษตัวนี้ป้องกันตัวด้วยโคลนที่แข็งราวกับเหล็ก และมีตาซ้ายที่สามารถมองเห็นในที่มืดได้",
		'zh-tw': "會用堅硬如鐵的泥巴保護身體， 且擁有能夠看穿黑暗的左眼。 是特別的月月熊。",
		'zh-cn': "會用堅硬如鐵的泥巴保護身體， 且擁有能夠看穿黑暗的左眼。 是特別的月月熊。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "けいけんそく",
			id: "Aturan Menurut Pengalaman",
			th: "กฎเกณฑ์จากประสบการณ์",
			'zh-tw': "經驗法則",
			'zh-cn': "經驗法則"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。自分の手札から「基本エネルギー」を2枚まで選び、このポケモンにつける。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat memasukkan kartu ini dari Kartu Pegangan ke Cadangan. Pilih paling banyak 2 lembar Energi Dasar {Petarung} dari Kartu Pegangan sendiri, lalu kenakan pada Pokémon ini.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือวางบนเบนช์ ใช้ได้ 1 ครั้ง เลือกการ์ด [พลังงานพื้นฐาน[ต่อสู้]] ได้สูงสุด 2 ใบจากบนมือฝ่ายเรา ติดที่โปเกมอนนี้",
			'zh-tw': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。",
			'zh-cn': "在自己的回合，從手牌將這張卡放置於備戰區時，可使用1次。從自己的手牌選擇最多2張「基本【鬥】能量」卡，附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "マッドバイト",
			id: "Mad Bite",
			th: "แมดไบต์",
			'zh-tw': "瘋狂啃咬",
			'zh-cn': "瘋狂啃咬"
		},

		damage: "100+",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×30ダメージ追加。",
			id: "Kerusakan yang diberikan bertambah sejumlah 30 untuk tiap Token Kerusakan yang dimiliki Pokémon Bertarung lawan.",
			th: "แดเมจจะเพิ่มตามจำนวนตัวนับแดเมจที่วางอยู่บนโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม x30",
			'zh-tw': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。",
			'zh-cn': "增加對手的戰鬥寶可夢身上放置的傷害指示物的數量×30點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "H"
}

export default card