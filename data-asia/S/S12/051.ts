import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "代拉基翁",
		th: "เทราคิออน"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],

	description: {
		'zh-tw': "擁有異常強大的力量。會把欺負弱小寶可夢的 對手打到再也站不起來。",
		th: "ผู้มีพลังสูงส่งเหนืออื่นใด จะทุบตีฝ่ายตรงข้ามที่รังแกโปเกมอนตัวเล็ก ๆ จนล้มไปเลย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "岩窟衝撞",
			th: "ถ้ำกระแทก"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到招式的傷害。在上個自己的回合，若自己的寶可夢使用了「岩窟衝撞」，則無法使用這個招式。",
			th: "เทิร์นถัดไปของฝ่ายตรงข้าม โปเกมอนนี้จะไม่ได้รับแดเมจจากท่าต่อสู้ ในเทิร์นก่อนของฝ่ายเรา ถ้าโปเกมอนฝ่ายเราใช้ [ถ้ำกระแทก] ไปแล้ว ท่าต่อสู้นี้จะใช้ไม่ได้"
		},

		damage: 120,
		cost: ["Fighting", "Fighting", "Colorless"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F"
}

export default card