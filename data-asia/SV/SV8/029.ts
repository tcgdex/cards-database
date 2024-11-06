import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トドゼルガ",
		'zh-tw': "帝牙海獅",
		'zh-cn': "帝牙海獅"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [365],
	hp: 170,
	types: ["Water"],

	description: {
		ja: "２、３０匹で 群れを つくる。 敵に 襲われると リーダーは 体を 張って 群れを 守る。",
		'zh-tw': "會由２、３０隻群居生活。 受到敵人攻擊時，首領會 奮不顧身地保護群體。",
		'zh-cn': "會由２、３０隻群居生活。 受到敵人攻擊時，首領會 奮不顧身地保護群體。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "とうけつファング",
			'zh-tw': "凍結獠牙",
			'zh-cn': "凍結獠牙"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、ついているエネルギーが2個以下のポケモン全員は、ワザが使えない。（新しく場に出したポケモンもふくむ。）",
			'zh-tw': "在下個對手的回合，身上附加的能量為2個以下的所有寶可夢無法使用招式。（包含新上場的寶可夢。）",
			'zh-cn': "在下個對手的回合，身上附加的能量為2個以下的所有寶可夢無法使用招式。（包含新上場的寶可夢。）"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "メガトンフォール",
			'zh-tw': "百萬噸墜落",
			'zh-cn': "百萬噸墜落"
		},

		damage: 170,

		effect: {
			ja: "このポケモンにも50ダメージ。",
			'zh-tw': "這隻寶可夢也受到50點傷害。",
			'zh-cn': "這隻寶可夢也受到50點傷害。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card