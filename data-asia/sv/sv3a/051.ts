import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "オトシドリex",
		'zh-tw': "下石鳥ex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ファストキャリー",
			'zh-tw': "急速輸送"
		},

		effect: {
			ja: "このワザは、先攻プレイヤーの最初の番でも使える。自分の山札からたねポケモンを3枚まで選び、ベンチに出す。そして山札を切る。",
			'zh-tw': "這個招式可在先攻玩家的最初回合使用。從自己的牌庫選擇最多3張【基礎】寶可夢卡，放置於備戰區。並且重洗牌庫。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "シャドーウインド",
			'zh-tw': "暗影之風"
		},

		damage: 130,

		effect: {
			ja: "のぞむなら、このポケモンと、ついているすべてのカードを、手札にもどす。",
			'zh-tw': "若希望，將這隻寶可夢與附加的卡，全部放回手牌。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card