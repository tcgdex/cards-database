import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "コフーライ"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	dexId: [665],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "決まった 棲み処を 持たない。 気の向くまま 野山を 歩きまわり 進化の エネルギーを 蓄える。"
	},

	stage: "Stage1",

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
			ja: "むしくい"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card