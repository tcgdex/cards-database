import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドククラゲ"
	},

	illustrator: "miki kudo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [73],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "８０本の 触手は 伸び縮み 自由。 網のように 広げて 獲物を 捕らえ 毒バリを 刺す。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どくのムチ"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}, {
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "パニックテンタクル"
		},

		damage: "90×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×90ダメージ。最初のコインがウラなら、相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card