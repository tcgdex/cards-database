import { Card } from "../../../interfaces"
import Set from "../sv2D"

const card: Card = {
	set: Set,

	name: {
		ja: "グレッグル",
		'zh-tw': "不良蛙"
	},

	illustrator: "kawayoo",
	rarity: "Common",
	category: "Pokemon",
	dexId: [453],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "毒袋を ふくらませて 鳴らし 辺りに 不気味な 音を 響かせ 相手が ひるむと どくづきをする。",
		'zh-tw': "會鼓起毒囊鳴叫。讓四周響起詭異的聲音， 等對手畏縮，便施以毒擊。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "どくばり",
			'zh-tw': "毒針"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card