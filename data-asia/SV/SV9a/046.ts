import { Card } from "../../../interfaces"
import Set from "../SV9a"

const card: Card = {
	set: Set,

	name: {
		ja: "バンバドロ",
		'zh-tw': "重泥挽馬",
		'zh-cn': "重泥挽馬"
	},

	illustrator: "Uta",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [750],
	hp: 150,
	types: ["Fighting"],

	description: {
		ja: "力仕事 だけでなく 陶器の 材料の 上質な 泥を 作り出すため 大事にされてきた。",
		'zh-tw': "除了能勝任粗重的工作，還能 製造出陶器材料的優質泥土， 所以一直以來都很受到珍視。",
		'zh-cn': "除了能勝任粗重的工作，還能 製造出陶器材料的優質泥土， 所以一直以來都很受到珍視。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マッドコート",
			'zh-tw': "泥巴膜",
			'zh-cn': "泥巴膜"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。",
			'zh-cn': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ヘビーインパクト",
			'zh-tw': "重磅衝擊",
			'zh-cn': "重磅衝擊"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "I"
}

export default card