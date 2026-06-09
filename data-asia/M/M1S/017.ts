import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ユキカブリ"
	},
	illustrator: "Pani Kobayashi",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],
	description: {
		ja: "寒い 季節は 山の ふもとまで 降りてくるが 春に なると 雪が 残る 山頂に 戻っていく。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "たたく"
		},
		damage: 10,
		cost: ["Water"]
	}, {
		name: {
			ja: "スノーアイス"
		},
		damage: 30,
		cost: ["Water", "Water"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Common",
	dexId: [459]
}

export default card
