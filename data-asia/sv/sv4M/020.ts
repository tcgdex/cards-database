import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "テツノツツミ"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [991],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "古い 書物に 登場する 謎の 物体に 似た ポケモン。 目撃例は 過去 ２件のみ。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハイパーブロアー"
		},

		effect: {
			ja: "このポケモンがベンチにいるなら、自分の番に1回使える。相手のバトルポケモンをベンチポケモンと入れ替える（バトル場に出すポケモンは相手が選ぶ）。その後、このポケモンと、ついているすべてのカードを、トラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "れいきゃくジェット"
		},

		damage: 80,

		effect: {
			ja: "次の相手の番、このワザを受けた進化ポケモンは、ワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card