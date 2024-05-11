import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "拉帝亞斯",
		ja: "ラティアス"
	},

	illustrator: "Teeziro",
	category: "Pokemon",
	hp: 120,
	types: ["Dragon"],

	description: {
		'zh-tw': "透過心靈感應和人類交流情感。會用能令光線折射的羽毛變化成其他的樣子。",
		ja: "テレパシーで 人間と 気持ちを 通わせる。 光を 屈折させる 羽毛で 別の 姿に 変わる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "紅色支援",
			ja: "レッドアシスト"
		},

		effect: {
			'zh-tw': "在自己的回合時，可使用1次。從自己的手牌選擇1張【超】能量卡，附於自己的「拉帝歐斯」身上。",
			ja: "自分の番に1回使える。自分の手札からエネルギーを1枚選び、自分の「ラティオス」につける。"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "力之屏障",
			ja: "ダイナバリア"
		},

		effect: {
			'zh-tw': "在下個對手的回合，這隻寶可夢不會受到「寶可夢【VMAX】」招式的傷害。",
			ja: "次の相手の番、このポケモンは「ポケモンVMAX」からワザのダメージを受けない。"
		},

		damage: 70,
		cost: ["Fire", "Psychic", "Colorless"]
	}],

	retreat: 1,
	regulationMark: "E",
	dexId: [380]
}

export default card