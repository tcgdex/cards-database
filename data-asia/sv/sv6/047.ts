import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ケーシィ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Kariya",
	dexId: [63],
	hp: 40,
	types: ["Psychic"],

	description: {
		ja: "寝ながら 超能力を 操る。 夢の 内容が 使う 力に 影響する。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "テレポーター"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、自分の番に1回使える。このポケモンと、ついているすべてのカードを、自分の山札にもどして切る。"
		}
	}],

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "ビーム"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card
