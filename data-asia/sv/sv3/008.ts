import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "オーロット"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [709],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "足の 先から 細い 根っこを 伸ばして 森の 木々と 結びつき 自在に 操る 力を もつ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "もりのしょうき"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、ポケモンチェックのたび、相手のバトルポケモンにダメカンを1個のせる。"
		}
	}],

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "とじこめる"
		},

		damage: 100,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card