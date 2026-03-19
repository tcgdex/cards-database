import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "蜂女王",
		ja: "ビークイン"
	},

	illustrator: "Yuya Oka",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	description: {
		'zh-tw': "自由自在地指揮孩子們與敵人戰鬥。孩子們會 為了蜂女王而拼上性命。",
		ja: "子どもたちを 自在に 操り 敵と 戦う。 子どもたちは ビークインのため 命を かける。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			'zh-tw': "蜜之猛攻",
			ja: "ハニーラッシュ"
		},

		effect: {
			'zh-tw': "從自己的手牌將任意數量的「甜甜蜜」卡給對手看過後，造成其張數×60點傷害。",
			ja: "自分の手札から「あまいミツ」を好きなだけ相手に見せて、その枚数×60ダメージ。"
		},

		damage: "60×",
		cost: ["Grass"]
	}, {
		name: {
			'zh-tw': "突刺",
			ja: "つきさす"
		},

		damage: 90,
		cost: ["Grass", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "F",
	rarity: "Uncommon",
	dexId: [416],

	thirdParty: {
		cardmarket: 609718
	}
}

export default card