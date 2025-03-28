import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ダンバル",
		'zh-tw': "鐵啞鈴",
		'zh-cn': "鐵啞鈴"
	},

	illustrator: "Izucch",
	rarity: "Common",
	category: "Pokemon",
	dexId: [374],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "体から 出ている 磁力と 地上の 磁力を 反発させて 空に 浮かぶのだ。",
		'zh-tw': "會讓身上發出的磁力和 地上的磁力相互排斥， 藉此飄浮在空中。",
		'zh-cn': "會讓身上發出的磁力和 地上的磁力相互排斥， 藉此飄浮在空中。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かいてんアタック",
			'zh-tw': "迴轉攻擊",
			'zh-cn': "迴轉攻擊"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ビーム",
			'zh-tw': "光束",
			'zh-cn': "光束"
		},

		damage: 30
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
	regulationMark: "I"
}

export default card