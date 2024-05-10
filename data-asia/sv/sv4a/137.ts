import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポッポ",
		'zh-tw': "波波",
		th: "ป็อปโปะ",
		id: "Pidgey",
		'zh-cn': "波波"
	},

	illustrator: "Oswaldo KATO",
	category: "Pokemon",
	dexId: [16],
	hp: 50,
	types: ["Colorless"],

	description: {
		ja: "戦いを 好まない おとなしい 性格だが 下手に 手を 出すと 強烈に 反撃されるぞ。",
		'zh-tw': "雖然性情溫和不愛戰鬥，但要是隨意對牠出手的話， 就會受到牠強烈的反擊。",
		th: "มีนิสัยสงบเสงี่ยม ไม่ชอบต่อสู้ แต่ถ้าเผลอไปหาเรื่องมันเข้าล่ะก็ จะถูกโต้กลับอย่างรุนแรงเอานะ",
		id: "Meski Pidgey berkepribadian tenang dan tidak menyukai pertikaian, ia akan melawan balik dengan ganas jika diganggu.",
		'zh-cn': "雖然性情溫和不愛戰鬥，但要是隨意對牠出手的話， 就會受到牠強烈的反擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ",
			'zh-tw': "呼朋引伴",
			th: "เรียกเพื่อน",
			id: "Memanggil Teman",
			'zh-cn': "呼朋引伴"
		},

		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。",
			th: "เลือกการ์ดโปเกมอน[พื้นฐาน]ได้สูงสุด 2 ใบจากสำรับการ์ดฝ่ายเรา วางบนเบนช์ แล้วสับสำรับการ์ด",
			id: "Pilih paling banyak 2 lembar Pokémon Basic dari Deck sendiri, lalu masukkan ke Cadangan. Kemudian, kocok Deck.",
			'zh-cn': "從自己的牌庫選擇最多2張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいあたり",
			'zh-tw': "撞擊",
			th: "พุ่งเข้าชน",
			id: "Serudukan",
			'zh-cn': "撞擊"
		},

		damage: 20
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