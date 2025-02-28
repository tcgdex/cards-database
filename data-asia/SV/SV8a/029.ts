import { Card } from "../../../interfaces"
import Set from "../SV8a"

const card: Card = {
	set: Set,

	name: {
		ja: "アズマオウ",
		id: "Seaking",
		th: "อซึมาโอ",
		'zh-tw': "金魚王",
		'zh-cn': "金魚王"
	},

	illustrator: "Nelnal",
	rarity: "None",
	category: "Pokemon",
	dexId: [119],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "秋になると プロポーズのため 体に 脂が のってきて とても きれいな色に 変化する。",
		id: "Saat musim gugur, tubuh Seaking makin berlemak dan warnanya berubah menjadi sangat indah karena Pokémon ini bersiap untuk melamar pasangannya.",
		th: "เมื่อเข้าสู่ฤดูใบไม้ร่วง ร่างกายจะมีไขมันสะสมเพิ่มขึ้นและเปลี่ยนเป็น สีที่สวยงามมาก เพื่อรอผสมพันธุ์",
		'zh-tw': "到了秋天，體內的脂肪 會因為要求偶而增加， 體色也會變得非常漂亮。",
		'zh-cn': "到了秋天，體內的脂肪 會因為要求偶而增加， 體色也會變得非常漂亮。"
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
			th: "ถ้ามี [สถานที่จัดเทศกาล] อยู่บนกระดาน โปเกมอนนี้ จะใช้ท่าต่อสู้ที่มีต่อเนื่อง กันได้ 2 ครั้ง (ถ้าโปเกมอนบนตำแหน่งต่อสู้ฝ่ายตรงข้าม[หมดสภาพ]ด้วยท่า ต่อสู้ครั้งที่ 1 หลังจากที่โปเกมอนบนตำแหน่งต่อสู้ตัวถัดไปออกมา ให้ใช้ท่า ต่อสู้ครั้งที่ 2)",
			'zh-tw': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）",
			'zh-cn': "若場上有「祭典會場」，則這隻寶可夢可使用持有的招式2次。（若對手的戰鬥寶可夢因第1次的招式而【昏厥】了，則在下一隻寶可夢放置後，使用第2次的招式。）"
		}
	}],

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "クイックドロー",
			id: "Quick Draw",
			th: "ควิกดรอว์",
			'zh-tw': "快速抽出",
			'zh-cn': "快速抽出"
		},

		damage: 60,

		effect: {
			ja: "自分の山札を2枚引く。",
			id: "Ambil 2 kartu dari atas Deck sendiri.",
			th: "จั่วการ์ด 2 ใบจากสำรับการ์ดฝ่ายเรา",
			'zh-tw': "從自己的牌庫抽出2張卡。",
			'zh-cn': "從自己的牌庫抽出2張卡。"
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