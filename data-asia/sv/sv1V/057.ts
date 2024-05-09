import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "フォレトス"
	},

	illustrator: "Lee HyunJung",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [205],
	hp: 120,
	types: ["Metal"],

	description: {
		ja: "鋼鉄のように 硬い 殻で 全身を 覆っている。 中の 正体は 不明。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "れんぞくスピン"
		},

		damage: "50×",

		effect: {
			ja: "ウラが出るまでコインを投げ、オモテの数×50ダメージ。"
		}
	}, {
		cost: ["Metal", "Colorless", "Colorless"],

		name: {
			ja: "シェルローリング"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このポケモンが受けるワザのダメージは「-50」される。"
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