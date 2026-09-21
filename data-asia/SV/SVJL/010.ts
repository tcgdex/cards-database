import { Card } from "../../../interfaces"
import Set from "../SVJL"

const card: Card = {
	set: Set,

	name: {
		ja: "アルセウスVSTAR"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "トリニティノヴァ"
		},

		damage: 200,

		effect: {
			ja: "自分の山札から基本エネルギーを3枚まで選び、自分の「ポケモンV」に好きなようにつける。そして山札を切る。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "スターバース"
		},

		effect: {
			ja: "自分の番に使える。自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card