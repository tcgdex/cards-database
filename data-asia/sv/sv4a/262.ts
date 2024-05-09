import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "マネネ"
	},

	illustrator: "Saya Tsuruta",
	category: "Pokemon",
	dexId: [439],
	hp: 30,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを そっくりに 真似を して 戸惑わせている あいだに さっさと 逃げるのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Void"],

		name: {
			ja: "マネマネごっこ"
		},

		effect: {
			ja: "相手は相手自身の場のポケモンが持っているワザを1つ選ぶ。選ばれたワザをこのワザとして使う。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 0
}

export default card