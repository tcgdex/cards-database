import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コフキムシ"
	},

	illustrator: "sowsow",
	rarity: "Common",
	category: "Pokemon",
	dexId: [664],
	hp: 30,
	types: ["Grass"],

	description: {
		ja: "毒の粉を まき散らして 敵を 追い払う。 棲んでいる 土地により エサにする 植物が 違う。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "てきおうしんか"
		},

		effect: {
			ja: "このポケモンは、最初の自分の番や、出したばかりの番でも進化できる。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "たいあたり"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card