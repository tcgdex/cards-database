import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "シザリガー"
	},

	illustrator: "Kurata So",
	rarity: "Common",
	category: "Pokemon",
	dexId: [342],
	hp: 130,
	types: ["Water"],

	description: {
		ja: "巨大な ハサミを 振りまわす 暴れ者。 育てるのが とても 難しい ポケモンと いわれる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "ジョキジョキ"
		},

		damage: 40,

		effect: {
			ja: "コインを2回投げ、オモテの数ぶん、相手の山札を上からトラッシュする。"
		}
	}, {
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "あばれハンマー"
		},

		damage: 180,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card