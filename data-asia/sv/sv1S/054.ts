import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "グレッグル",
		'zh-tw': "不良蛙"
	},

	illustrator: "Shiburingaru",
	rarity: "Common",
	category: "Pokemon",
	dexId: [453],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "毒袋を ふくらませて 鳴らし 辺りに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
		'zh-tw': "會鼓起毒囊鳴叫。讓四周響起詭異的聲音， 等對手畏縮，便施以毒擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "たたく",
			'zh-tw': "敲擊"
		},

		damage: 10
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "はりたおす",
			'zh-tw': "擊倒"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card