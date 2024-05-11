import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヒスイ ジュナイパーV"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 220,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "V",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "やまがり"
		},

		effect: {
			ja: "自分の山札から好きなカードを2枚まで選び、手札に加える。そして山札を切る。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "きんせつしゃげき"
		},

		damage: 100,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card