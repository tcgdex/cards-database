import { Card } from "../../../interfaces"
import Set from "../SN"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "毛毛角羊",
		ja: "バイウールー"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	description: {
		'zh-tw': "用牠那彈力十足的毛織成的地毯就像是彈簧墊， 可以站上去蹦蹦跳。",
		ja: "弾力の ある 毛で 織った カーペットは トランポリンみたいで 乗れば ピョンピョン 跳ねるのだ。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "後投",
			ja: "うしろなげ"
		},

		effect: {
			'zh-tw': "自己的1隻備戰寶可夢也受到10點傷害。[在備戰區不計算弱點・抵抗力。]",
			ja: "自分のベンチポケモン1匹にも、10ダメージ。［ベンチは弱点・抵抗力を計算しない。］"
		},

		damage: 40,
		cost: ["Colorless"]
	}, {
		name: {
			'zh-tw': "滾滾衝刺",
			ja: "コロコロダッシュ"
		},

		effect: {
			'zh-tw': "擲硬幣直到出現反面，增加正面出現的次數×30點傷害。",
			ja: "ウラが出るまでコインを投げ、オモテの数×30ダメージ追加。"
		},

		damage: "60＋",
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	dexId: [832]
}

export default card