import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドン",
		'zh-tw': "呆呆獸"
	},

	illustrator: "OKACHEKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [79],
	hp: 80,
	types: ["Psychic"],

	description: {
		ja: "動きが のろく 間抜け。 叩かれても ５秒 たってから 痛さを 感じるほどだ。",
		'zh-tw': "動作遲鈍且呆頭呆腦。就算挨打也得花上５秒 才會感受到疼痛。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "かいすいよく",
			'zh-tw': "海水浴"
		},

		effect: {
			ja: "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。",
			'zh-tw': "將這隻寶可夢恢復「30」HP，特殊狀態也全部恢復。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ずつき",
			'zh-tw': "頭錘"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card