import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "デスマス"
	},

	illustrator: "IKEDA Saki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [562],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "夜な夜な 遺跡を さまよう。 もっている マスクは 人 だった ころの 自分の 顔 だという。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "つぶやく"
		},

		damage: 10
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ちょっとうらむ"
		},

		damage: 20
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