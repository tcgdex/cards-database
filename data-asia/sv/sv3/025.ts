import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ガマゲロゲ"
	},

	illustrator: "Misa Tsutsui",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [537],
	hp: 170,
	types: ["Water"],

	description: {
		ja: "コブが 起こす バイブレーションが マッサージに 良いと 老人に 大人気の ポケモンだ。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ブルブルエリア"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手のバトルポケモンは、ワザを使うためのエネルギーが、エネルギー1個ぶん多くなる。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "エコーボイス"
		},

		damage: 120,

		effect: {
			ja: "次の自分の番、このポケモンの「エコーボイス」のダメージは「+100」される。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card