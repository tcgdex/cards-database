import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ビリジオンV"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "わかくさのかぜ"
		},

		effect: {
			ja: "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "エメラルドブレード"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card