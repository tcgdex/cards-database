import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "オトシドリ"
	},

	illustrator: "Shibuzoh.",
	category: "Pokemon",
	dexId: [962],
	hp: 110,
	types: ["Darkness"],

	description: {
		ja: "胸元の 袋で エサを 包み 巣に 持ち帰る。 大きな 音の するものを 落として 喜ぶ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ガラクタはこび"
		},

		effect: {
			ja: "自分の山札から「ポケモンのどうぐ」を3枚まで選び、相手に見せて、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Darkness", "Colorless"],

		name: {
			ja: "わしづかみ"
		},

		damage: 60,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
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

	retreat: 1
}

export default card