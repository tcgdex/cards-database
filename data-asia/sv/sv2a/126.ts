import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブーバー",
		'zh-tw': "鴨嘴火獸",
		th: "บูเบอร์",
		id: "Magmar"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [126],
	hp: 90,
	types: ["Fire"],

	description: {
		ja: "全身が つねに 燃えている。 火事を 起こす 原因の ひとつとして 恐れられる。",
		'zh-tw': "全身時時刻刻都在燃燒。人們認為牠是引起火災的 原因之一，非常畏懼牠。",
		th: "ทั่วตัวนั้นเผาไหม้อยู่ตลอดเวลา เป็นที่หวาดกลัวเพราะเป็นหนึ่งในสาเหตุของไฟไหม้",
		id: "Seluruh tubuh Magmar selalu terbakar. Pokémon ini ditakuti sebagai salah satu penyebab terjadinya kebakaran."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "ひだね",
			'zh-tw': "火種",
			th: "เชื้อไฟ",
			id: "Nyala Api"
		},

		damage: 10
	}, {
		cost: ["Fire", "Fire", "Colorless"],

		name: {
			ja: "フレアコンボ",
			'zh-tw': "閃焰合擊",
			th: "แฟลร์คอมโบ",
			id: "Flare Combo"
		},

		damage: "80+",

		effect: {
			ja: "自分のベンチに「エレブー」がいるなら、80ダメージ追加。",
			'zh-tw': "若自己的備戰區有「電擊獸」，則增加80點傷害。",
			th: "ถ้าบนเบนช์ฝ่ายเรามี [เอเลบู] อยู่ การโจมตีนี้จะเพิ่มแดเมจอีก 80",
			id: "Jika ada Electabuzz di Cadangan sendiri, kerusakan yang diberikan bertambah sejumlah 80."
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