import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ムクホーク",
		'zh-tw': "姆克鷹",
		th: "มุคูฮอว์ก",
		id: "Staraptor"
	},

	illustrator: "Atsushi Furusawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [398],
	hp: 150,
	types: ["Colorless"],

	description: {
		ja: "ムクホークになると 群れから 離れて １匹で 生きていく。 強靭な 翼を 持っている。",
		'zh-tw': "變成姆克鷹後，就會脫離群體獨自生活。 擁有強韌的翅膀。",
		th: "เมื่อกลายเป็นมุคูฮอว์กก็จะแยกตัวจากฝูงมาใช้ชีวิตอยู่ตัวเดียว มีปีกที่แข็งแรง",
		id: "Setelah menjadi Staraptor, Pokémon ini meninggalkan kelompoknya dan hidup sendiri. Pokémon ini memiliki sayap yang tangguh."
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "きりもみアウェイ",
			'zh-tw': "旋衝離閃",
			th: "ควงสว่านหลบ",
			id: "Bor Tabrak Lari"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。",
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到【基礎】寶可夢招式的傷害。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจของท่าต่อสู้จากโปเกมอน[พื้นฐาน]",
			id: "Pada giliran lawan berikutnya, Pokémon ini tidak menerima kerusakan akibat serangan dari Pokémon Basic."
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "パワーブラスト",
			'zh-tw': "力量爆破",
			th: "พาวเวอร์บลาสต์",
			id: "Power Blast"
		},

		damage: 180,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。",
			th: "เลือกพลังงานที่ติดอยู่กับโปเกมอนนี้ 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			id: "Pilih 1 Energi yang dikenakan pada Pokémon ini, lalu buang ke Trash."
		}
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
	regulationMark: "G"
}

export default card