import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ビークイン",
		'zh-tw': "蜂女王"
	},

	illustrator: "Megumi Higuchi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [416],
	hp: 120,
	types: ["Grass"],

	description: {
		ja: "胴体は 子どもたちの 巣穴。 いろんな フェロモンを 出して 子どもたちを 自由に 操る。",
		'zh-tw': "身體是孩子們的巢穴。會釋放出各式各樣的費洛蒙， 自由自在地控制孩子們。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "にどづき",
			'zh-tw': "二連撞"
		},

		damage: "30×",

		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。",
			'zh-tw': "擲2次硬幣，造成正面出現的次數×30點傷害。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "しゅうげきしれい",
			'zh-tw': "襲擊指令"
		},

		damage: 120,

		effect: {
			ja: "自分のベンチの「ミツハニー」を1匹選び、そのポケモンと、ついているすべてのカードを、山札にもどして切る。山札にもどせないなら、このワザは失敗。",
			'zh-tw': "選擇1隻自己的備戰區的「三蜜蜂」，將那隻寶可夢與附加的卡全部放回牌庫並重洗。若無法放回牌庫，則這個招式失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card