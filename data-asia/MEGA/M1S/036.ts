import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ケーシィ"
	},
	illustrator: "Orca",
	category: "Pokemon",
	hp: 50,
	types: ["Psychic"],
	description: {
		ja: "眠ったままテレポートできる。眠りが深いほど離れた場所に移動するという。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "テレポートアタック"
		},
		damage: 10,
		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},
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
	dexId: [63]
}

export default card
