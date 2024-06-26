import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "夠讚狗ex"
	},

	illustrator: "takuyoa",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		name: {
			'zh-tw': "猛毒筋力"
		},

		effect: {
			'zh-tw': "從自己的牌庫選擇最多2張「基本【惡】能量」卡，附於這隻寶可夢身上。並且重洗牌庫。附上卡的情況下，將這隻寶可夢【中毒】。"
		},

		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "瘋狂連鎖"
		},

		effect: {
			'zh-tw': "若這隻寶可夢【中毒】，則增加130點傷害。"
		},

		damage: "130+",
		cost: ["Darkness", "Darkness", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card