import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "マメバッタ",
		'zh-tw': "豆蟋蟀",
		th: "มาเมะบัตตะ",
		id: "Nymble"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [919],
	hp: 50,
	types: ["Grass"],

	description: {
		ja: "第３の脚が 畳まれている。 ピンチになると １０メートル以上 ジャンプする 脚力を 持つ。",
		'zh-tw': "總是將第３對腳折起來。擁有在遇到危機時能夠 跳超過１０公尺的跳躍力。",
		th: "พับขาที่ 3 เอาไว้ มีพลังขาที่สามารถกระโดดได้สูงกว่า 10 เมตรเมื่อตกอยู่ในสถานการณ์คับขัน",
		id: "Sepasang kaki ketiga Nymble terlipat. Pokémon ini memiliki kekuatan kaki untuk dapat melompat setinggi 10 meter ketika terdesak."
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "けりつける",
			'zh-tw': "踹",
			th: "ลูกเตะหนักหน่วง",
			id: "Menyepak"
		},

		damage: 30,

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