import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "トドゼルガ"
	},

	illustrator: "Mitsuhiro Arita",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [365],
	hp: 170,
	types: ["Water"],

	description: {
		ja: "２、３０匹で 群れを つくる。 敵に 襲われると リーダーは 体を 張って 群れを 守る。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "とうけつファング"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、ついているエネルギーが2個以下のポケモン全員は、ワザが使えない。（新しく場に出したポケモンもふくむ。）"
		}
	}, {
		cost: ["Water", "Water"],

		name: {
			ja: "メガトンフォール"
		},

		damage: 170,

		effect: {
			ja: "このポケモンにも50ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 3
}

export default card