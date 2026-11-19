import { Card } from "../../../interfaces"
import Set from "../S10D"

const card: Card = {
	set: Set,

	name: {
		ja: "スワンナ",
		'zh-tw': "舞天鵝"
	},

	illustrator: "Sekio",
	rarity: "Common",
	category: "Pokemon",
	dexId: [581],
	hp: 120,
	types: ["Water"],

	evolveFrom: {
		ja: "コアルヒー"
	},

	description: {
		ja: "夜明けと ともに スワンナたちは 踊りはじめる。真ん中で 踊る スワンナが 群れの リーダー。",
		'zh-tw': "舞天鵝們會隨著黎明起舞。 在正中間跳舞的就是群體的首領。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "みずのはどう",
			'zh-tw': "水之波動"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。",
			'zh-tw': "將對手的戰鬥寶可夢【睡眠】。"
		},

		damage: 20,
		cost: ["Water"]
	}, {
		name: {
			ja: "エアスラッシュ",
			'zh-tw': "空氣斬"
		},

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。",
			'zh-tw': "選擇1個這隻寶可夢身上附加的能量，將其丟棄。"
		},

		damage: 130,
		cost: ["Water", "Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "F",
	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 650978,
				tcgplayer: 569773,
				cardtrader: 234084,
			},
		},
	]
}

export default card