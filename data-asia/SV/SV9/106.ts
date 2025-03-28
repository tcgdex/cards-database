import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ウリムー"
	},

	illustrator: "Nakamura Ippan",
	rarity: "None",
	category: "Pokemon",
	dexId: [220],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "鼻先で 地面を 掘って 食べるものを 探しだす。 凍った 地面も へっちゃらだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ"
		},

		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Fighting"],

		name: {
			ja: "つきたおし"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card