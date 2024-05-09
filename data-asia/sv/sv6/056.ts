import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "キチキギス"
	},

	category: "Pokemon",
	rarity: "Rare",
	illustrator: "Kouki Saitou",
	dexId: [1016],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "艶やかな 翼を 羽ばたかせて フェロモンを 振りまき 人や ポケモンを 蠱惑に 魅了する。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "アドレナフェロモン"
		},

		effect: {
			ja: "このポケモンにエネルギーがついているなら、このポケモンがワザのダメージを受けるとき、自分はコインを1回投げる。オモテなら、このポケモンはそのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "エナジーフェザー"
		},

		damage: "30×",

		effect: {
			ja: "このポケモンについているエネルギーの数×30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card
