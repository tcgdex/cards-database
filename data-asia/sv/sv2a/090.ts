import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "シェルダー",
		'zh-tw': "大舌貝"
	},

	illustrator: "Nelnal",
	rarity: "Common",
	category: "Pokemon",
	dexId: [90],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ダイヤモンドよりも 硬い殻に 覆われている。 しかし 中は 意外と 柔らかい。",
		'zh-tw': "包覆著身體的是比鑽石還硬的殼。不過殼裡面 卻比想像中的還要柔軟。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "シェルプレス",
			'zh-tw': "硬殼壓制"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card