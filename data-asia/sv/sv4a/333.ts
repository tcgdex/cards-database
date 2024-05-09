import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノワダチex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Metal"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Metal", "Metal", "Colorless"],

		name: {
			ja: "クラッドローリング"
		},

		damage: 150,

		effect: {
			ja: "のぞむなら、ダメージを与えたあとに、このポケモンについている「ブーストエナジー 未来」をトラッシュする。その場合、次の相手の番、このポケモンが受けるワザのダメージは「-150」される。"
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