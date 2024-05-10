import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "アメタマ",
		'zh-tw': "溜溜糖球",
		th: "อาเมทามะ",
		id: "Surskit"
	},

	illustrator: "Saya Tsuruta",
	rarity: "Common",
	category: "Pokemon",
	dexId: [283],
	hp: 60,
	types: ["Grass"],

	description: {
		ja: "普段は 池に 棲んでいるが 夕立の 後には 街中の 水たまりに 姿を 現す。",
		'zh-tw': "平時住在池塘裡，午後下過雷陣雨時， 會出現在街上的小水窪中。",
		th: "ปกติจะอาศัยอยู่ในบ่อน้ำ แต่จะปรากฏตัวตามแอ่งน้ำในเมืองหลังฝนยามเย็น",
		id: "Biasanya Surskit hidup di kolam, namun ia muncul pada genangan air di tengah kota sesaat setelah hujan malam reda."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "とびかかる",
			'zh-tw': "猛撲",
			th: "กระโจนใส่",
			id: "Terjangan"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げウラなら、このワザは失敗。",
			'zh-tw': "擲1次硬幣若為反面，則這個招式失敗。",
			th: "ทอยเหรียญ 1 ครั้งถ้าออกก้อย ท่าต่อสู้นี้จะล้มเหลว",
			id: "Lempar koin 1 kali. Jika hasilnya sisi belakang, serangan ini gagal."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card