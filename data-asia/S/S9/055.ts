import { Card } from "../../../interfaces"
import Set from "../S9"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "路卡利歐",
		ja: "ルカリオ"
	},

	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 120,
	types: ["Fighting"],

	description: {
		'zh-tw': "操作一種被稱為波導的力量來進行狩獵。這種力量就連 巨大的岩石也能擊得粉碎。",
		ja: "大岩も 粉々に 砕く 波動と 呼ばれる 力を 操って 獲物を 狩る。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "旺盛鬥志",
			ja: "たけるとうき"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。在這隻寶可夢身上放置2個傷害指示物。然後，從自己的牌庫選擇1張【鬥】能量卡，附於這隻寶可夢身上。並且重洗牌庫。",
			ja: "自分の番に1回使える。このポケモンにダメカンを2個のせる。その後、自分の山札からエネルギーを1枚選び、このポケモンにつける。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "連續波導彈",
			ja: "れんぞくはどうだん"
		},

		effect: {
			'zh-tw': "將這隻寶可夢身上附加的【鬥】能量全部丟棄，增加其張數×60點傷害。",
			ja: "このポケモンについているエネルギーをすべてトラッシュし、その枚数×60ダメージ追加。"
		},

		damage: "10＋",
		cost: ["Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F",
	rarity: "Rare",
	dexId: [448],

	thirdParty: {
		cardmarket: 605906
	}
}

export default card