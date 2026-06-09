import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "風妖精VSTAR",
		ja: "エルフーンVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 250,
	types: ["Psychic"],
	stage: "VMAX",

	attacks: [{
		name: {
			'zh-tw': "戲法之風",
			ja: "トリックウインド"
		},

		effect: {
			'zh-tw': "在下個對手的回合，對手無法從手牌附上「寶可夢道具」「特殊能量」。",
			ja: "次の相手の番、相手は手札から、「ポケモンのどうぐ」「特殊エネルギー」を出してつけられない。"
		},

		damage: 160,
		cost: ["Psychic", "Colorless", "Colorless"]
	}, {
		name: {
			'zh-tw': "[VSTAR力量]棉球星星",
			ja: "わただまスター"
		},

		effect: {
			'zh-tw': "對手的1隻寶可夢，受到這隻寶可夢身上附加的能量的數量×60點傷害。[在備戰區不計算弱點・抵抗力。][對戰中，己方只可使用1次【VSTAR】力量。]",
			ja: "相手のポケモン1匹に、このポケモンについているエネルギーの数×60ダメージ。［ベンチは弱点・抵抗力を計算しない。］［対戦中、自分はVSTARパワーを1回しか使えない。］"
		},

		cost: ["Psychic"]
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",

	thirdParty: {
		cardmarket: 605901
	}
}

export default card