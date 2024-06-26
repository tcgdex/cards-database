import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蓋諾賽克特"
	},

	illustrator: "Kazumasa Yasukuni",
	category: "Pokemon",
	hp: 110,
	types: ["Metal"],

	description: {
		'zh-tw': "被等離子隊改造過的 古代的蟲寶可夢。 背上的大砲力量得到了提升。"
	},

	stage: "Basic",

	attacks: [{
		name: {
			'zh-tw': "‌‌[特性]ACE消弭"
		},

		effect: {
			'zh-tw': "若這隻寶可夢附有「寶可夢道具」卡，則對手無法從手牌使出「【ACE SPEC】」卡。"
		}
	}, {
		name: {
			'zh-tw': "磁力爆破"
		},

		damage: 100,
		cost: ["Metal", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card