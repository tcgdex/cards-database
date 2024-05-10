import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドククラゲ",
		'zh-tw': "毒刺水母"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [73],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "８０本の 触手は 伸び縮み 自由。 網のように 広げて 獲物を 捕らえ 毒バリを 刺す。",
		'zh-tw': "能夠自由伸縮身上的８０根觸手。會像撒網般張開觸手捕捉獵物， 並用毒針注入劇毒。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どくのムチ",
			'zh-tw': "毒之鞭"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをどくにする。",
			'zh-tw': "將對手的戰鬥寶可夢【中毒】。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "パニックテンタクル",
			'zh-tw': "恐慌觸手"
		},

		damage: "90×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×90ダメージ。最初のコインがウラなら、相手のバトルポケモンをこんらんにする。",
			'zh-tw': "擲硬幣直到出現反面，造成正面出現的次數×90點傷害。若最初的硬幣為反面，則將對手的戰鬥寶可夢【混亂】。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "G"
}

export default card