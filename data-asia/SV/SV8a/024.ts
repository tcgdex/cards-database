import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノドクガ",
		id: "Iron Moth",
		th: "แมลงมอธเหล็ก",
		'zh-tw': "鐵毒蛾",
		'zh-cn': "鐵毒蛾"
	},

	illustrator: "Kouki Saitou",
	rarity: "None",
	category: "Pokemon",
	dexId: [994],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "捕獲例は ゼロ。 データ不足。 古い 書物に 記された 物体と 特徴が 一致。",
		id: "Laporan penangkapannya 0. Data terkait Pokémon ini kurang. Karakteristiknya cocok dengan objek yang tertulis dalam buku kuno.",
		th: "ข้อมูลไม่เพียงพอและไม่เคยมีข้อมูลว่าถูกจับมาก่อน มีลักษณะเด่นตรงกับวัตถุที่อธิบายไว้ในบันทึกเก่าแก่",
		'zh-tw': "無捕獲紀錄。資料不足。 其特徵與古書裡 所記載的物體一致。",
		'zh-cn': "無捕獲紀錄。資料不足。 其特徵與古書裡 所記載的物體一致。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サーマルリアクター",
			id: "Thermal Reactor",
			th: "เครื่องปฏิกรณ์ความร้อน",
			'zh-tw': "熱流反應者",
			'zh-cn': "熱流反應者"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			id: "Dapat digunakan 1 kali pada giliran sendiri saat Pokémon ini masuk dari Cadangan ke Arena Bertarung. Pilih sesukanya Energi {Api} yang dikenakan pada Pokémon di Arena sendiri, lalu pindahkan ke Pokémon ini.",
			th: "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ใช้ได้ 1 ครั้ง เลือกพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายมาติดกับโปเกมอนนี้",
			'zh-tw': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的【火】能量卡，改附於這隻寶可夢身上。",
			'zh-cn': "在自己的回合，從備戰區將這隻寶可夢放置於戰鬥場時，可使用1次。選擇自己的場上寶可夢身上附加的任意數量的【火】能量卡，改附於這隻寶可夢身上。"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ねっせん",
			id: "Sinar Panas",
			th: "ลำแสงร้อนจี๋",
			'zh-tw': "高熱光線",
			'zh-cn': "高熱光線"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「ねっせん」が使えない。",
			id: "Pada giliran sendiri berikutnya, Pokémon ini tidak dapat menggunakan Sinar Panas.",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ลำแสงร้อนจี๋] ไม่ได้",
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「高熱光線」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「高熱光線」。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card