import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "ドータクン"
	},

	illustrator: "Nobuhiro Imagawa",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [437],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "雨雲を 呼べる ポケモンとして 大昔から 祀られていた。 ときどき 地面に 埋められている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "オラクルプレス"
		},

		damage: 20,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。"
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "じんつうりき"
		},

		damage: "70＋",

		effect: {
			ja: "自分の手札と相手の手札が同じ枚数なら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 3
}

export default card