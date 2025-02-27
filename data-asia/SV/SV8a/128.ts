import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヨルノズク",
		id: "Noctowl",
		th: "โยรุโนะซึคุ",
		'zh-tw': "貓頭夜鷹",
		'zh-cn': "貓頭夜鷹"
	},

	illustrator: "matazo",
	rarity: "None",
	category: "Pokemon",
	dexId: [164],
	hp: 100,
	types: ["Colorless"],

	description: {
		ja: "非常に 柔らかい 羽は 飛ぶとき 音を 出さないので こっそり 獲物に 近づける。",
		id: "Karena sayapnya yang sangat lembut tidak mengeluarkan suara ketika terbang, ia dapat mendekati mangsanya dengan diam-diam.",
		th: "เพราะปีกที่อ่อนนุ่มมากทำให้ไม่เกิดเสียงในยามที่บิน จึงแอบเข้าใกล้เหยื่อได้โดยที่เหยื่อไม่รู้ตัว",
		'zh-tw': "極為柔軟的翅膀讓牠在 飛行時不發一絲聲響， 因此可以悄悄地接近獵物。",
		'zh-cn': "極為柔軟的翅膀讓牠在 飛行時不發一絲聲響， 因此可以悄悄地接近獵物。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ほうせきさがし",
			id: "Mencari Permata",
			th: "ค้นหาอัญมณี",
			'zh-tw': "搜尋寶石",
			'zh-cn': "搜尋寶石"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、自分の場に「テラスタル」のポケモンがいるなら、1回使える。自分の山札からトレーナーズを2枚まで選び、相手に見せて、手札に加える。そして山札を切る。",
			id: "Dapat digunakan 1 kali pada giliran sendiri jika ada Pokémon Terastal di Arena sendiri saat memasukkan kartu ini dari Kartu Pegangan untuk melakukan evolusi. Pilih paling banyak 2 lembar Trainer dari Deck sendiri, perlihatkan ke lawan, lalu tambahkan ke Kartu Pegangan. Kemudian, kocok Deck.",
			th: "ในเทิร์นฝ่ายเรา เมื่อนำการ์ดนี้จากบนมือออกมาวิวัฒนาการแล้ว ถ้าบนกระดานฝ่ายเรามีโปเกมอน [เทรัสตัล] อยู่ ใช้ได้ 1 ครั้ง เลือกการ์ดเทรนเนอร์ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา ให้ฝ่ายตรงข้ามดู นำขึ้นมือ แล้วสับสำรับการ์ด",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，若自己的場上有「太晶」寶可夢，則可使用1次。從自己的牌庫選擇最多2張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "在自己的回合，從手牌使出這張卡並完成進化時，若自己的場上有「太晶」寶可夢，則可使用1次。從自己的牌庫選擇最多2張訓練家卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "スピードウイング",
			id: "Speed Wing",
			th: "สปีดวิง",
			'zh-tw': "高速之翼",
			'zh-cn': "高速之翼"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card