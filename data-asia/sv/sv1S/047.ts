import { Card } from "../../../interfaces"
import Set from "../sv1S"

const card: Card = {
	set: Set,

	name: {
		ja: "サダイジャ",
		'zh-tw': "沙螺蟒"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [844],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "体を 目一杯 伸縮させ ダンプカーも 押し流すほどの 勢いで 砂を 噴射する。",
		'zh-tw': "會把身體伸長到極限後，用足以沖走大卡車的 氣勢噴射出沙子。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ロケットずつき",
			'zh-tw': "火箭頭錘"
		},

		damage: 120
	}, {
		cost: ["Fighting", "Fighting", "Fighting", "Colorless"],

		name: {
			ja: "さじんふんしゃ",
			'zh-tw': "沙塵噴射"
		},

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、トラッシュする。その後、相手のバトルポケモンと、ついているすべてのカードを、相手の山札にもどして切る。",
			'zh-tw': "選擇2個這隻寶可夢身上附加的能量，將其丟棄。然後，將對手的戰鬥寶可夢與附加的卡，全部放回對手的牌庫並重洗。"
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