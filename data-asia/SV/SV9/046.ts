import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "マンムーex",
		'zh-tw': "象牙豬ex",
		'zh-cn': "象牙豬ex"
	},

	illustrator: "Nisota Niso",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 340,
	types: ["Fighting"],
	stage: "Stage2",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "マンモスキャリー",
			'zh-tw': "毛象搬運",
			'zh-cn': "毛象搬運"
		},

		effect: {
			ja: "自分の番に1回使える。自分の山札からポケモンを1枚選び、相手に見せて、手札に加える。そして山札を切る。",
			'zh-tw': "在自己的回合時可使用1次。從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。",
			'zh-cn': "在自己的回合時可使用1次。從自己的牌庫選擇1張寶可夢卡，在給對手看過後加入手牌。並且重洗牌庫。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "とどろくこうしん",
			'zh-tw': "雷鳴行進",
			'zh-cn': "雷鳴行進"
		},

		damage: "180+",

		effect: {
			ja: "自分のベンチの2進化ポケモンの数×40ダメージ追加。",
			'zh-tw': "增加自己的備戰區的【2階進化】寶可夢的數量×40點傷害。",
			'zh-cn': "增加自己的備戰區的【2階進化】寶可夢的數量×40點傷害。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "I"
}

export default card