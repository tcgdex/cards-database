import { Card } from "../../../interfaces"
import Set from "../SP6"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "藏瑪然特VSTAR",
		ja: "ザマゼンタVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 270,
	types: ["Metal"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "盾之星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。在下個對手的回合，自己的所有寶可夢受到對手的寶可夢招式的傷害「-100」點。（包含新上場的寶可夢。）[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "終極衝擊",
			ja: "ギガインパクト"
		},

		effect: {
			'zh-tw': "在下個自己的回合，這隻寶可夢無法使用招式。",
			ja: "次の自分の番、このポケモンはワザが使えない。"
		},

		damage: 220,
		cost: ["Metal", "Metal", "Colorless"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "シールドスター"
		},

		effect: {
			ja: "自分の番に使える。次の相手の番、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-100」される。（新しく場に出したポケモンもふくむ。）［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card