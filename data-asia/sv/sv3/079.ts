import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ダイノーズ"
	},

	illustrator: "takuyoa",
	rarity: "Common",
	category: "Pokemon",
	dexId: [476],
	hp: 150,
	types: ["Metal"],

	description: {
		ja: "３つの 小さな ユニットを 使い エサを とったり 敵と 戦う。 本体は ほぼ 命令するだけ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal", "Colorless"],

		name: {
			ja: "トリプルノーズ"
		},

		damage: "40×",

		effect: {
			ja: "コインを3回投げ、オモテの数×40ダメージ。"
		}
	}, {
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "アイアンバスター"
		},

		damage: 160,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
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

	retreat: 4
}

export default card