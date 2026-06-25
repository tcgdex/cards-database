import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ヌイコグマ"
	},
	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 70,
	types: ["Colorless"],
	description: {
		ja: "前脚をじたばた振って身を守る様が可愛らしいが大木をへし折る威力だ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "なぐる"
		},
		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			ja: "はねまわる"
		},
		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Illustration rare",
	dexId: [759]
}

export default card
