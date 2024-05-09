import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "バタフリー"
	},

	illustrator: "Tika Matsuno",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [12],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "毎日 ミツを 集めまわる。 脚の 産毛に ミツを 塗りこんで 巣に 持ち帰る 習性をもつ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "ふきとばし"
		},

		damage: 60,

		effect: {
			ja: "相手のバトルポケモンをベンチポケモンと入れ替える。［バトル場に出すポケモンは相手が選ぶ。］"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "バイバイフライト"
		},

		effect: {
			ja: "このポケモンと、相手のベンチポケモンを1匹選び、それぞれのポケモンと、ついているすべてのカードを、山札にもどして切る。相手のベンチポケモンがいないなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card