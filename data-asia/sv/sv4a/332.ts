import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "パルデア ドオーex",
		'zh-tw': "帕底亞 土王ex"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "どくのぬまち",
			'zh-tw': "毒之沼地"
		},

		effect: {
			ja: "場にスタジアムが出ているなら、自分の番に1回使える。相手のバトルポケモンをどくにする。",
			'zh-tw': "若場上有競技場卡，則在自己的回合時可使用1次。將對手的戰鬥寶可夢【中毒】。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "ニードルボーン",
			'zh-tw': "尖刺骨"
		},

		damage: 200,

		effect: {
			ja: "コインを1回投げウラなら、次の自分の番、このポケモンはワザが使えない。",
			'zh-tw': "擲1次硬幣若為反面，則在下個自己的回合，這隻寶可夢無法使用招式。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card