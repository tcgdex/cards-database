import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シガロコ"
	},

	illustrator: "Toshinao Aoki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [953],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "泥玉を 転がしながら 進化の エネルギーを 熟成させる。 やがて 進化のときを 迎える。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "もってくる"
		},

		effect: {
			ja: "自分の山札を1枚引く。"
		}
	}, {
		cost: ["Grass"],

		name: {
			ja: "ころがる"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card