import { Card } from "../../../interfaces"
import Set from "../SV2D"

const card: Card = {
	set: Set,

	name: {
		ja: "オトシドリ",
		'zh-tw': "下石鳥",
		th: "โอโตชิโดริ",
		id: "Bombirdier"
	},

	illustrator: "Sekio",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [962],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "胸の 羽毛と 抜け落ちた 羽根で 作った 袋に 物を 入れて 高いところから 落として 遊ぶ。",
		'zh-tw': "會把東西裝在用胸部的絨羽和脫落的羽毛做成的袋子裡， 然後從高處往下丟來玩耍。",
		th: "ใส่สิ่งของลงในถุงที่ทำจากขนที่หน้าอกและขนที่ร่วงหล่น จากนั้นจะเล่นโดยการปล่อยสิ่งของนั้นลงจากที่สูง",
		id: "Bombirdier bermain-main dengan menjatuhkan benda dari tempat tinggi yang dimasukkan ke dalam kantong yang terbuat dari bulu dada dan bulu sayapnya yang rontok."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おとどけポケット",
			'zh-tw': "親送口袋",
			th: "กระเป๋านำส่ง",
			id: "Saku Pengiriman"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇1張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน] 1 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih 1 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck."
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ダークエッジ",
			'zh-tw': "暗黑刀鋒",
			th: "ดาร์กเอดจ์",
			id: "Dark Edge"
		},

		damage: 120,

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