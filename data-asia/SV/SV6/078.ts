import { Card } from "../../../interfaces"
import Set from "../SV6"

const card: Card = {
	set: Set,

	name: {
		ja: "ブロロローム",
		'zh-tw': "普隆隆姆"
	},

	category: "Pokemon",
	rarity: "Uncommon",
	illustrator: "Hasuno",
	dexId: [966],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "排気音で 激しく 威嚇する。 円筒形の 口から べろを 出して 毒液を まき散らす。",
		'zh-tw': "用排氣聲猛烈威嚇對手。 會從圓筒形的嘴巴 吐出舌頭並噴灑毒液。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まきかえす",
			'zh-tw': "捲土重來"
		},

		damage: "30+",

		effect: {
			ja: "前の相手の番に、ワザのダメージで、自分のポケモンがきぜつしていたなら、90ダメージ追加。",
			'zh-tw': "在上個對手的回合，若自己的寶可夢因招式的傷害而【昏厥】了，則增加90點傷害。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "つっぱしる",
			'zh-tw': "奔進"
		},

		damage: "100×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×100ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×100點傷害。"
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

	retreat: 2,
	regulationMark: "H"
}

export default card