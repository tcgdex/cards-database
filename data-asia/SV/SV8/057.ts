import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "シロデスナex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 280,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "すなじごく"
		},

		damage: 160,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンは、にげられない。"
		}
	}, {
		cost: ["Water", "Psychic", "Fighting"],

		name: {
			ja: "バライトジェイル"
		},

		effect: {
			ja: "相手のベンチポケモン全員に、それぞれ残りHPが「100」になるように、ダメカンをのせる。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 4
}

export default card