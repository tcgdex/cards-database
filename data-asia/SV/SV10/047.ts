import { Card } from "../../../interfaces"
import Set from "../SV10"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "棄世猴",
		'zh-cn': "棄世猴",
		ja: "コノヨザル"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 150,
	types: ["Fighting"],

	description: {
		'zh-tw': "在怒氣突破臨界點時， 獲得了能夠擺脫 肉體束縛的力量。",
		'zh-cn': "在怒氣突破臨界點時， 獲得了能夠擺脫 肉體束縛的力量。",
		ja: "怒りのボルテージが 臨界点を 超えたとき 肉体という 枠に 縛られない パワーを 手に入れた。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "憤怒穴",
			'zh-cn': "憤怒穴",
			ja: "ふんどのつぼ"
		},

		effect: {
			'zh-tw': "若這隻寶可夢身上放置有2個以上的傷害指示物，則這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			'zh-cn': "若這隻寶可夢身上放置有2個以上的傷害指示物，則這隻寶可夢使用的招式，對對手的戰鬥寶可夢造成的傷害「+120」點。",
			ja: "このポケモンにダメカンが2個以上のっているなら、このポケモンが使うワザの、相手のバトルポケモンへのダメージは「+120」される。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "衝擊打擊",
			'zh-cn': "衝擊打擊",
			ja: "インパクトブロー"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。",
			'zh-cn': "在下個自己的回合，這隻寶可夢無法使用「衝擊打擊」。",
			ja: "次の自分の番、このポケモンは「インパクトブロー」が使えない。"
		},

		damage: 160,
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [979]
}

export default card