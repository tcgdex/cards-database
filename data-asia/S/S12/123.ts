import { Card } from "../../../interfaces"
import Set from "../S12"

const card: Card = {
	set: Set,

	name: {
		ja: "ルギアVSTAR"
	},

	illustrator: "PLANETA Mochizuki",
	category: "Pokemon",
	hp: 280,
	types: ["Colorless"],
	stage: "VMAX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ストームダイブ"
		},

		damage: 220,

		effect: {
			ja: "のぞむなら、場に出ているスタジアムをトラッシュする。"
		}
	}, {
		name: {
			ja: "特性"
		}
	}, {
		name: {
			ja: "アッセンブルスター"
		},

		effect: {
			ja: "自分の番に使える。自分のトラッシュからポケモン（「ルールを持つポケモン」をのぞく）を2枚まで選び、ベンチに出す。［対戦中、自分はVSTARパワーを1回しか使えない。］"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 680219
	}
}

export default card