import { Card } from "../../../interfaces"
import Set from "../SVK"

const card: Card = {
	set: Set,

	name: {
		ja: "マナフィ"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	dexId: [490],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "どんな ポケモンとでも 心を 通い合わせる ことが できる 不思議な 能力を 持っている。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "なみのヴェール"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のベンチポケモン全員は、相手のワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "みずかけ"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card