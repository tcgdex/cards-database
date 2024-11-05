import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ラティアスex"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 210,
	types: ["Psychic"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "スカイライン"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のたねポケモン全員のにげるためのエネルギーは、すべてなくなる。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			ja: "むげんのやいば"
		},

		damage: 200,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
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

	retreat: 2,
	rarity: "None"
}

export default card