import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ラルトス"
	},
	illustrator: "Terada Tera",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],
	description: {
		ja: "人の感情を頭の赤いツノで敏感にキャッチする力を持つ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "もってくる"
		},
		effect: {
			ja: "自分の山札を1枚引く。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ずつき"
		},
		damage: 10,
		cost: ["Psychic"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [280]
}

export default card
