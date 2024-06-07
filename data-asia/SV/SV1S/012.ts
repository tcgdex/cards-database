import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グレンアルマ",
		'zh-tw': "紅蓮鎧騎",
		th: "กุเร็นอาร์มา",
		id: "Armarouge"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [936],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "多くの 武勲を 立てた 戦士の 鎧によって 進化した 姿。 忠誠心の 厚い ポケモン。",
		'zh-tw': "藉由立下眾多勛績的戰士所穿的鎧甲進化成的樣子。 是忠心耿耿的寶可夢。",
		th: "ร่างที่วิวัฒนาการด้วยชุดเกราะของนักรบที่สร้างผลงานมามากมาย เป็นโปเกมอนที่มีความจงรักภักดีมาก",
		id: "Wujud evolusi dari Charcadet menjadi Armarouge berkat zirah milik pendekar yang memenangkan banyak pertarungan. Pokémon yang sangat setia."
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ひおくり",
			'zh-tw': "送火",
			th: "ส่งไฟ",
			id: "Mengantarkan Api"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分のベンチポケモンについているエネルギーを1個選び、バトルポケモンにつけ替える。",
			'zh-tw': "在自己的回合時，可不限次數使用。選擇1個自己的備戰寶可夢身上附加的【火】能量，改附於戰鬥寶可夢身上。",
			th: "ใช้กี่ครั้งก็ได้ในเทิร์นฝ่ายเรา เลือกพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนบนเบนช์ฝ่ายเรา 1 ลูก ย้ายไปติดกับโปเกมอนบนตำแหน่งต่อสู้",
			id: "Dapat digunakan berkali-kali pada giliran sendiri. Pilih 1 Energi {Api} yang dikenakan pada Pokémon Cadangan sendiri, lalu pindahkan ke Pokémon Bertarung."
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "フレイムキャノン",
			'zh-tw': "火焰加農炮",
			th: "เฟลมแคนนอน",
			id: "Flame Cannon"
		},

		damage: 90,

		effect: {
			ja: "相手のバトルポケモンをやけどにする。",
			'zh-tw': "將對手的戰鬥寶可夢【灼傷】。",
			th: "ทำให้โปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้ามเป็นสภาวะ[ไหม้]",
			id: "Ubah kondisi Pokémon Bertarung lawan menjadi Luka Bakar."
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