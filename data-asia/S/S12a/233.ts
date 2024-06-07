import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "雷吉奇卡斯VSTAR",
		ja: "レジギガスVSTAR"
	},

	illustrator: "Aya Kusube",
	category: "Pokemon",
	hp: 300,
	types: ["Colorless"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "星星守護者"
		},

		effect: {
			'zh-tw': "若對手剩餘獎賞卡的張數為1張，則在自己的回合時可使用。選擇對手的1隻備戰寶可夢，將那隻寶可夢與附加的卡全部丟棄。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "終極衝擊",
			ja: "ギガインパクト"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 230,
		cost: ["Colorless", "Colorless", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターガーディアン"
		},

		effect: {
			ja: "相手のサイドの残り枚数が1枚なら、自分の番に使える。相手のベンチポケモンを1匹選び、そのポケモンと、ついているすべてのカードを、トラッシュする。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 4,
	regulationMark: "F"
}

export default card