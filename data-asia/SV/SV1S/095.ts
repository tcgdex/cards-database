import { Card } from "../../../interfaces"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグex"
	},

	illustrator: "PLANETA Hiiragi",
	category: "Pokemon",
	hp: 250,
	types: ["Darkness"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "わるだくみ"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "どくどくリッパー"
		},

		damage: 120,

		effect: {
			ja: "相手のバトルポケモンをどくにする。このどくでのせるダメカンの数は6個になる。"
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,

	thirdParty: {
		cardmarket: 693022
	}
}

export default card