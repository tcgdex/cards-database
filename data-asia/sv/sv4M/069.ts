import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノドクガ",
		th: "แมลงมอธเหล็ก"
	},

	illustrator: "Takeshi Nakamura",
	category: "Pokemon",
	dexId: [994],
	hp: 130,
	types: ["Fire"],

	description: {
		ja: "捕獲例は ゼロ。 データ不足。 古い 書物に 記された 物体と 特徴が 一致。",
		th: "ข้อมูลไม่เพียงพอและไม่เคยมีข้อมูลว่าถูกจับมาก่อน มีลักษณะเด่นตรงกับวัตถุที่อธิบายไว้ในบันทึกเก่าแก่"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "サーマルリアクター",
			th: "เครื่องปฏิกรณ์ความร้อน"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。自分の場のポケモンについているエネルギーを好きなだけ選び、このポケモンにつけ替える。",
			th: "ในเทิร์นฝ่ายเรา เมื่อโปเกมอนนี้ออกจากเบนช์มาที่ตำแหน่งต่อสู้ ใช้ได้ 1 ครั้ง เลือกพลังงาน[ไฟ]ที่ติดอยู่กับโปเกมอนบนกระดานฝ่ายเราตามจำนวนที่ชอบ ย้ายมาติดกับโปเกมอนนี้"
		}
	}],

	attacks: [{
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "ねっせん",
			th: "ลำแสงร้อนจี๋"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンは「ねっせん」が使えない。",
			th: "เทิร์นถัดไปของฝ่ายเรา โปเกมอนนี้จะใช้ [ลำแสงร้อนจี๋] ไม่ได้"
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