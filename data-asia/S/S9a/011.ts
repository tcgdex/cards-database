import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "光輝席多藍恩",
		ja: "かがやくヒードラン"
	},

	illustrator: "Shigenori Negishi",
	category: "Pokemon",
	hp: 160,
	types: ["Fire"],

	description: {
		'zh-tw': "體內流著如熔岩般滾燙的血液。 棲息在火山的洞穴裡。",
		ja: "マグマのように 燃えたぎる 血液が 体を 流れている。 火山の 洞穴に 生息する。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "激狂轟炸",
			ja: "レイジングボンバー"
		},

		effect: {
			'zh-tw': "造成這隻寶可夢身上放置的傷害指示物的數量×70點傷害。",
			ja: "このポケモンにのっているダメカンの数×70ダメージ。"
		},

		damage: "70×",
		cost: ["Fire", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "F",
	dexId: [485]
}

export default card