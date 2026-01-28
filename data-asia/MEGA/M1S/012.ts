import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ヤクデ"
	},
	illustrator: "GIDORA",
	category: "Pokemon",
	hp: 80,
	types: ["Fire"],
	description: {
		ja: "発熱した体で獲物を締め上げる。こんがり焼けたら むしゃむしゃ いただくのだ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ぶつかる"
		},
		damage: 10,
		cost: ["Fire"]
	}, {
		name: {
			ja: "かえん"
		},
		damage: 50,
		cost: ["Fire", "Fire", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [850]
}

export default card
