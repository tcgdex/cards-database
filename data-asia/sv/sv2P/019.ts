import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "コオリッポ"
	},

	illustrator: "kawayoo",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [875],
	hp: 110,
	types: ["Water"],

	description: {
		ja: "気温の 高い日は 仲間同士で 頭の 氷を くっつけて おたがいを 冷やしながら 過ごす。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "ずつき"
		},

		damage: 20
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "アイスブロック"
		},

		damage: 100,

		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。次の相手の番、このポケモンが受けるワザのダメージは「-100」される。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card