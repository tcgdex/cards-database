import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マニューラ"
	},

	illustrator: "Shin Nagasawa",
	category: "Pokemon",
	dexId: [461],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "進化して さらに ずる賢くなり ツメで 石に サインをつけて コミュニケーションを はかっている。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アサルトハント"
		},

		effect: {
			ja: "自分の番に、このポケモンがベンチからバトル場に出たとき、1回使える。相手のベンチのたねポケモンを1匹選び、バトルポケモンと入れ替える。"
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "スラッシュクロー"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card