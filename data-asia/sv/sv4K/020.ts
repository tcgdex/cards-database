import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "アマージョex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 310,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "アイシクルソール"
		},

		effect: {
			ja: "相手のポケモン1匹に、そのポケモンの残りHPが「30」になるように、ダメカンをのせる。"
		}
	}, {
		cost: ["Grass", "Grass"],

		name: {
			ja: "トロピカルキック"
		},

		damage: 180,

		effect: {
			ja: "このポケモンのHPを「30」回復し、特殊状態もすべて回復する。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card