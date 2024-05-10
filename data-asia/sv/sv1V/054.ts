import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オラチフ",
		'zh-tw': "偶叫獒"
	},

	illustrator: "KEIICHIRO ITO",
	rarity: "Common",
	category: "Pokemon",
	dexId: [942],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "発達した あごと キバは 岩を 噛み砕く 力強さ。 厚い 脂肪は 防御力 抜群。",
		'zh-tw': "發達的顎部和獠牙擁有能咬碎岩石的強大威力。 厚厚的脂肪使牠防禦力超群。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "かみくだく",
			'zh-tw': "咬碎"
		},

		damage: 30,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "擲1次硬幣若為正面，則選擇1個對手的戰鬥寶可夢身上附加的能量，將其丟棄。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card