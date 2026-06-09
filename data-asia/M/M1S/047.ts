import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ボチ"
	},
	illustrator: "Narumi Sato",
	category: "Pokemon",
	hp: 80,
	types: ["Psychic"],
	description: {
		ja: "人と関わることなく命を落とした野良の犬ポケモンが生まれ変わったと言われている。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ふむ"
		},
		damage: 10,
		cost: ["Psychic"]
	}, {
		name: {
			ja: "とっしん"
		},
		damage: 40,
		effect: {
			ja: "このポケモンにも10ダメージ。"
		},
		cost: ["Psychic", "Colorless"]
	}],
	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],
	resistances: [{
		type: "Fighting",
		value: "-30"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [971]
}

export default card
