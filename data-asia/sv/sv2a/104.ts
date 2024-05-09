import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カラカラ"
	},

	illustrator: "Shinya Komatsu",
	rarity: "Common",
	category: "Pokemon",
	dexId: [104],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "死んだ 母親の 骨を 被る。 夢を 見て 泣くことも あるけど 涙を 流すたびに 強くなる。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "おうえんボーン"
		},

		effect: {
			ja: "このポケモンがベンチにいるかぎり、自分の「ガラガラ」が使うワザの、相手のバトルポケモンへのダメージは「+30」される。"
		}
	}],

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "にどたたき"
		},

		damage: "10×",

		effect: {
			ja: "コインを2回投げ、オモテの数×10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card