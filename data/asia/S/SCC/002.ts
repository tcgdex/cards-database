import { Card } from "../../../interfaces"
import Set from "../SCC"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "安瓢蟲"
	},

	illustrator: "Sekio",
	category: "Pokemon",
	hp: 90,
	types: ["Grass"],

	description: {
		'zh-tw': "一邊撒落閃閃發亮的粉末，一邊在夜空中飛翔。據說如果身上沾到這種粉末，就會有好事發生。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "快速抽出"
		},

		effect: {
			'zh-tw': "從自己的牌庫抽出2張卡。"
		},

		damage: 20,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "空氣斬"
		},

		effect: {
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 100,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card