import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ツボツボ"
	},
	illustrator: "OKUBO",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		ja: "ツボのような甲羅の中にためこんだ木の実はいつの間にかドロドロのジュースに変わる"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ころがる"
		},
		damage: 50,
		cost: ["Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [213]
}

export default card
