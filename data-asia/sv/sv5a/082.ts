import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "サケブシッポex"
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 190,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ぜっきょう"
		},

		effect: {
			ja: "このワザは、後攻プレイヤーの最初の番にだけ使える。次の相手の番、相手は手札からサポートを出して使えない。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "かみくだく"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンについているエネルギーを1個選び、トラッシュする。"
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

	retreat: 1
}

export default card