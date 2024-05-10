import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "スリーパー",
		'zh-tw': "引夢貘人"
	},

	illustrator: "Mousho",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [97],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "相手と 目が 合ったときに 催眠術など 数々の 超能力を 使うという。",
		'zh-tw': "據說牠和對手對到眼時，就會使出催眠術等 各式各樣的超能力。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "でたとこさいみん",
			'zh-tw': "臨場催眠"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。相手のバトルポケモンをねむりにする。",
			'zh-tw': "在自己的回合，從手牌使出這張卡並完成進化時，可使用1次。將對手的戰鬥寶可夢【睡眠】。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "ちょうねんりき",
			'zh-tw': "超念力"
		},

		damage: 110
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