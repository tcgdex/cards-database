import { Card } from "../../../interfaces"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ウェーニバルex"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 320,
	types: ["Water"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "エキサイトサンバ"
		},

		damage: 60,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。その後、相手は相手自身のバトルポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "スクリューシュート"
		},

		damage: 230,

		effect: {
			ja: "このポケモンについているエネルギーを2個選び、手札にもどす。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2
}

export default card