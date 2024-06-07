import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		ja: "ギラティナVSTAR"
	},

	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "VMAX",

	attacks: [{
		cost: ["Grass", "Psychic", "Colorless"],

		name: {
			ja: "ロストインパクト"
		},

		damage: 280,

		effect: {
			ja: "自分の場のポケモンについているエネルギーを2個選び、ロストゾーンに置く。"
		}
	}, {
		cost: ["Grass", "Psychic"],

		name: {
			ja: "スターレクイエム"
		},

		effect: {
			ja: "このワザは、自分のロストゾーンにカードが10枚以上あるときにしか使えない。相手のバトルポケモンをきぜつさせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	retreat: 2
}

export default card