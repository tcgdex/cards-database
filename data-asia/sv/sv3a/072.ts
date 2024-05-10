import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナットレイ",
		'zh-tw': "堅果啞鈴"
	},

	illustrator: "Kurata So",
	category: "Pokemon",
	dexId: [598],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "鋼より 硬い 棘を もつ。 触手の 棘を 突き刺し 岩壁を 這って 移動する。",
		'zh-tw': "擁有比鋼鐵還堅硬的尖刺。會利用觸手上的尖刺 攀附在岩壁上移動。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "かたいからだ",
			'zh-tw': "堅硬身軀"
		},

		effect: {
			ja: "このポケモンが受けるワザのダメージは「-30」される。",
			'zh-tw': "這隻寶可夢受到招式的傷害「-30」點。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "スピニングニードル",
			'zh-tw': "旋轉尖刺"
		},

		damage: 50,

		effect: {
			ja: "次の自分の番、このポケモンの「スピニングニードル」のダメージは「+100」される。",
			'zh-tw': "在下個自己的回合，這隻寶可夢「旋轉尖刺」的傷害「+100」點。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 3,
	regulationMark: "G"
}

export default card