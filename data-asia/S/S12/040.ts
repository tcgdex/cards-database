import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "單卵細胞球",
		th: "ยูนิรัน"
	},

	illustrator: "Ligton",
	category: "Pokemon",
	hp: 40,
	types: ["Psychic"],

	description: {
		'zh-tw': "透過心靈感應來與夥伴交流。如果受到了強烈的衝擊， 包裹著身體的液體就會漏出來。",
		th: "สามารถส่งความคิดหากันด้วยกระแสจิตได้ เมื่อได้รับการกระทบอย่างรุนแรงของเหลวที่ห่อหุ้มร่างจะรั่วไหลออกมา"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card