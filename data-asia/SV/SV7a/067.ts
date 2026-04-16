import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ポワルン たいようのすがた"
	},

	illustrator: "Narano",
	category: "Pokemon",
	dexId: [351],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "晴れた 日の ポワルンの 姿。 ヒーターの前に 置く 実験では この 形に 変化しなかった。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "サニーアシスト"
		},

		damage: 50,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモン1匹につけ替える。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 0,
	rarity: "None",

	thirdParty: {
		cardmarket: 787566
	}
}

export default card