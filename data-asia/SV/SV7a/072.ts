import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "タタッコ"
	},

	illustrator: "USGMEN",
	category: "Pokemon",
	dexId: [852],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "餌を 求め 地上に 上がる。 好奇心旺盛で 目にしたものは とりあえず 触手で 殴る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ちょっとつっこむ"
		},

		damage: 30,

		effect: {
			ja: "このポケモンにも10ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2,
	rarity: "None"
}

export default card