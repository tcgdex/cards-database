import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "ペロッパフ",
		id: "Swirlix",
		th: "เพร็อพพัฟ",
		'zh-tw': "綿綿泡芙",
		'zh-cn': "綿綿泡芙"
	},

	illustrator: "Akira Komayama",
	rarity: "None",
	category: "Pokemon",
	dexId: [684],
	hp: 50,
	types: ["Psychic"],

	description: {
		ja: "１日に 食べる 砂糖は 自分の 体重と 同じ。 糖分が 足りないと ひどく 不機嫌になる。",
		id: "Dalam sehari, Swirlix memakan gula seberat berat badannya. Jika kekurangan gula, Pokémon ini akan menjadi sangat cemberut.",
		th: "ปริมาณน้ำตาลที่กินต่อหนึ่งวันเทียบเท่ากับน้ำหนักตัวของมัน หากน้ำตาลไม่พอจะอารมณ์เสียมาก",
		'zh-tw': "每天要吃掉與自己體重 相同重量的砂糖， 糖分不夠就會鬧脾氣。",
		'zh-cn': "每天要吃掉與自己體重 相同重量的砂糖， 糖分不夠就會鬧脾氣。"
	},

	stage: "Basic",

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
		cost: ["Psychic"],

		name: {
			ja: "そっとのせる",
			id: "Letakkan Diam-diam",
			th: "ค่อย ๆ วาง",
			'zh-tw': "悄聲加害",
			'zh-cn': "悄聲加害"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを2個のせる。",
			id: "Letakkan 2 Token Kerusakan pada 1 Pokémon lawan.",
			th: "วางตัวนับแดเมจ 2 ตัว บนโปเกมอนฝ่ายตรงข้าม 1 ตัว",
			'zh-tw': "在對手的1隻寶可夢身上放置2個傷害指示物。",
			'zh-cn': "在對手的1隻寶可夢身上放置2個傷害指示物。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card