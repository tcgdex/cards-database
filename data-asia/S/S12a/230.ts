import { Card } from "../../../interfaces"
import Set from "../S12a"

const card: Card = {
	set: Set,

	name: {
		'zh-tw': "洗翠 大劍鬼VSTAR",
		ja: "ヒスイ ダイケンキVSTAR"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	hp: 270,
	types: ["Darkness"],
	stage: "VMAX",

	abilities: [{
		type: "Ability",

		name: {
			'zh-tw': "殘月星星"
		},

		effect: {
			'zh-tw': "在自己的回合時可使用。在對手的1隻寶可夢身上放置4個傷害指示物。[對戰中，己方只可使用1次【VSTAR】力量。]"
		}
	}],

	attacks: [{
		name: {
			'zh-tw': "狠心利刃",
			ja: "むじひなやいば"
		},

		effect: {
			'zh-tw': "若對手的戰鬥寶可夢身上放置有傷害指示物，則增加110點傷害。",
			ja: "相手のバトルポケモンにダメカンがのっているなら、110ダメージ追加。"
		},

		damage: "110＋",
		cost: ["Darkness", "Darkness"]
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "ザンゲツスター"
		},

		effect: {
			ja: "自分の番に使える。相手のポケモン1匹に、ダメカンを4個のせる。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "F"
}

export default card