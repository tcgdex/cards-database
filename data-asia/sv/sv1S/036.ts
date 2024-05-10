import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒラヒナ",
		'zh-tw': "飄飄雛"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [955],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "お腹の ヒラヒラから 放射する サイコパワーで わずか １センチだけ つま先が 地面から 浮いている。",
		'zh-tw': "從肚子的褶邊放射出的精神力量，能夠讓牠浮在腳尖和地面 距離僅有區區１公分的空中。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "チョロダッシュ",
			'zh-tw': "小衝刺"
		},

		damage: 10,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。",
			'zh-tw': "將這隻寶可夢與備戰寶可夢互換。"
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