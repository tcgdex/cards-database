import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "デスカーン"
	},

	illustrator: "Shiburingaru",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [563],
	hp: 120,
	types: ["Psychic"],

	description: {
		ja: "ピカピカの 黄金の 体。 もはや 人間だった ことは 思い出すことは ないと いう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "めいふのおきて"
		},

		effect: {
			ja: "おたがいの特性を持つポケモン全員に、それぞれダメカンを6個のせる。"
		}
	}, {
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			ja: "ホロウショット"
		},

		damage: 100
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card