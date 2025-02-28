import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "トサキント",
		id: "Goldeen",
		th: "โทซาคินโตะ",
		'zh-tw': "角金魚",
		'zh-cn': "角金魚"
	},

	illustrator: "saino misaki",
	rarity: "None",
	category: "Pokemon",
	dexId: [118],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "背びれ 胸びれ 尾びれが 優雅に たなびくので 水の踊り子 と呼ばれる。",
		id: "Goldeen dikenal sebagai Penari Air karena sirip punggung, sirip dada, dan sirip ekornya berayun dengan anggun.",
		th: "ครีบหลัง ครีบอก ครีบหางโบกสะบัดอย่างงดงามจนถูกเรียกว่านักระบำแห่งท้องน้ำ",
		'zh-tw': "會優雅地搖擺 背鰭、胸鰭和尾鰭， 所以被稱為水中的舞者。",
		'zh-cn': "會優雅地搖擺 背鰭、胸鰭和尾鰭， 所以被稱為水中的舞者。"
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
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "うずしお",
			id: "Pusaran Air",
			th: "น้ำวน",
			'zh-tw': "潮旋",
			'zh-cn': "潮旋"
		},

		damage: 10,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			id: "Lempar koin 1 kali. Jika hasilnya sisi depan, pilih 1 Energi yang dikenakan pada Pokémon Bertarung lawan, lalu buang ke Trash.",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกหัว เลือกพลังงานที่ติดอยู่กับโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม 1 ลูก ทิ้งที่ตำแหน่งทิ้งการ์ด",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。",
			'zh-cn': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card