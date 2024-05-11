import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "可可多拉",
		th: "โคโคโดรา"
	},

	illustrator: "sowsow",
	category: "Pokemon",
	hp: 70,
	types: ["Metal"],

	description: {
		'zh-tw': "保護牠身體的鋼鐵盔甲，是由牠吃下的鐵礦石以及 偶爾吃下的鐵軌所製成的。",
		th: "กินแร่เหล็กหรือบางครั้งก็รางรถไฟเพื่อสร้างเกราะเหล็กกล้าปกป้องร่างกาย"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "衝撞",
			th: "กระแทก"
		},

		damage: 10,
		cost: ["Metal"]
	}, {
		name: {
			'zh-tw': "撞一下",
			th: "จุ้นจ้านหน่อย"
		},

		effect: {
			'zh-tw': "這隻寶可夢也受到10點傷害。",
			th: "โปเกมอนตัวนี้ก็จะได้รับแดเมจ 10 ด้วย"
		},

		damage: 30,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card