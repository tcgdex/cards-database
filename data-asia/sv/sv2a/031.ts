import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ニドクイン"
	},

	illustrator: "Teeziro",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [31],
	hp: 170,
	types: ["Darkness"],

	description: {
		ja: "背中の 棘の 隙間に 子どもを 乗せて あやす。 そのときに 毒が 出ることは けっして ないのだ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "クイーンプレス"
		},

		damage: 90,

		effect: {
			ja: "次の相手の番、このポケモンはたねポケモンからワザのダメージを受けない。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "つきたおし"
		},

		damage: 160
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card