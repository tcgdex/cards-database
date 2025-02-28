import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "カミッチュ",
		id: "Dipplin",
		th: "คามิชชู",
		'zh-tw': "裹蜜蟲",
		'zh-cn': "裹蜜蟲"
	},

	illustrator: "Saboteri",
	rarity: "None",
	category: "Pokemon",
	dexId: [1011],
	hp: 80,
	types: ["Grass"],

	description: {
		ja: "頭を 出している そとッチュと 尻尾を 出している なかッチュが 助け合い りんごのなかで 暮らす。",
		id: "Boah luar yang mengeluarkan kepala dan Boah dalam yang mengeluarkan ekor saling membantu dan tinggal bersama di dalam apel.",
		th: "ตัวนอกที่ยื่นหัวออกมาและตัวในที่ยื่นหางออกมานั้นอาศัยอยู่ด้วยกันในแอปเปิลและคอยช่วยเหลือซึ่งกันและกัน",
		'zh-tw': "由露出了頭部的外頭蟲與 露出了尾巴的裡頭蟲相扶相持， 一起在蘋果裡面生活。",
		'zh-cn': "由露出了頭部的外頭蟲與 露出了尾巴的裡頭蟲相扶相持， 一起在蘋果裡面生活。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おまつりおんど",
			id: "Orkes Festival",
			th: "รำวงงานเทศกาล",
			'zh-tw': "祭典樂舞",
			'zh-cn': "祭典樂舞"
		},

		effect: {
			ja: "場に「お祭り会場」が出ているなら、このポケモンは、持っているワザを2回連続で使える。（1回目のワザで相手のバトルポケモンがきぜつしたなら、次のバトルポケモンが出たあと、2回目のワザを使う。）",
			id: "Jika ada Lokasi Festival di Arena, Pokémon ini dapat menggunakan serangan yang dimiliki 2 kali berturut-turut. (Jika Pokémon Bertarung lawan KO akibat serangan pertama, gunakan serangan kedua setelah Pokémon Bertarung berikutnya masuk.)",
			th: "ถ้ามี [สถานที่จัดเทศกาล] อยู่บนกระดาน โปเกมอนนี้ จะใช้ท่าต่อสู้ที่มีต่อเนื่องกันได้ 2 ครั้ง (ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ]ด้วยท่าต่อสู้ครั้งที่ 1 หลังจากที่โปเกมอนบนตำแหน่งต่อสู้ตัวถัดไปออกมา ให้ใช้ท่าต่อสู้ครั้งที่ 2)",
			'zh-tw': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）",
			'zh-cn': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）"
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ともだちのわ",
			id: "Lingkaran Teman",
			th: "กลุ่มเพื่อน",
			'zh-tw': "朋友之環",
			'zh-cn': "朋友之環"
		},

		damage: "20×",

		effect: {
			ja: "自分のベンチポケモンの数×20ダメージ。",
			id: "Serangan ini memberikan kerusakan sejumlah 20 untuk tiap Pokémon Cadangan sendiri.",
			th: "แดเมจจะเท่ากับจำนวนโปเกมอนบนเบนช์ฝ่ายเรา x20",
			'zh-tw': "造成自己的備戰寶可夢的數量×20點傷害。",
			'zh-cn': "造成自己的備戰寶可夢的數量×20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "H"
}

export default card