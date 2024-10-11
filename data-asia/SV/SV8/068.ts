import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "キラフロル"
	},

	illustrator: "takashi shiraishi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [970],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "毒エネルギーが 結晶化した 花びらは テラスタルの 宝石に 似ていると 最近 判明した。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "むしばむはへん"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをどくにする。次の相手の番、このワザを受けたポケモンは、手札から出すエネルギーをつけられない。"
		}
	}, {
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "いわおとし"
		},

		damage: 60
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card