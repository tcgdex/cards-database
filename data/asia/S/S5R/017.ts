import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "墨海馬",
		th: "ทัททู"
	},

	illustrator: "Anesaki Dynamic",
	category: "Pokemon",
	hp: 60,
	types: ["Water"],

	description: {
		'zh-tw': "會在珊瑚的陰影處安家。如果感到危險，就會從口中吐出漆黑的墨汁逃跑。",
		th: "สร้างที่อยู่ที่ด้านหลังของหินปะการัง พอรู้สึกถึงอันตรายก็จะพ่นหมึกดำออกมาจากปากแล้วหนีไป"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "煙幕",
			th: "พ่นควัน"
		},

		effect: {
			'zh-tw': "在下個對手的回合，當受到這個招式的寶可夢使用招式時，對手擲1次硬幣。若為反面，則那個招式失敗。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม เมื่อโปเกมอนที่ได้รับท่าต่อสู้นี้จะใช้ท่าต่อสู้ ฝ่ายตรงข้ามทอยเหรียญ 1 ครั้ง ถ้าออกก้อย ท่าต่อสู้นั้นล้มเหลว"
		},

		damage: 10,
		cost: ["Water"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card