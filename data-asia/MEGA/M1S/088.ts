import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "メガラティアスex"
	},
	illustrator: "AKIRA EGAWA",
	category: "Pokemon",
	hp: 280,
	types: ["Dragon"],
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ひるがえす"
		},
		damage: 40,
		effect: {
			ja: "のぞむなら、このポケモンをベンチポケモンと入れ替える。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "ミラージュインパルス"
		},
		damage: 300,
		effect: {
			ja: "このポケモンについているエネルギーを、すべてトラッシュする。"
		},
		cost: ["Fire", "Psychic", "Colorless"]
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Super art rare",
	suffix: "EX",
	dexId: [380]
}

export default card
