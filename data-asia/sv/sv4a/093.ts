import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒラヒナ",
		'zh-tw': "飄飄雛"
	},

	illustrator: "kawayoo",
	category: "Pokemon",
	dexId: [955],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "お腹の ヒラヒラから 放射する サイコパワーで わずか １センチだけ つま先が 地面から 浮いている。",
		'zh-tw': "從肚子的褶邊放射出的精神力量，能夠讓牠浮在腳尖和地面 距離僅有區區１公分的空中。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんりき",
			'zh-tw': "念力"
		},

		damage: 20,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。",
			'zh-tw': "擲1次硬幣若為正面，則將對手的戰鬥寶可夢【麻痺】。"
		}
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
	regulationMark: "G"
}

export default card