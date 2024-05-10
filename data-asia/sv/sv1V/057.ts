import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "フォレトス",
		'zh-tw': "佛烈托斯"
	},

	illustrator: "Lee HyunJung",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [205],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "鋼鉄のように 硬い 殻で 全身を 覆っている。 中の 正体は 不明。",
		'zh-tw': "全身覆蓋著有如鋼鐵般堅硬的殼。 殼裡的真面目至今不明。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "れんぞくスピン",
			'zh-tw': "連續旋轉"
		},

		damage: 50,

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×50點傷害。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "シェルローリング",
			'zh-tw': "硬殼回轉"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。",
			'zh-tw': "在下個對手的回合，這隻寶可夢受到招式的傷害「-50」點。"
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