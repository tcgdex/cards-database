import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "コイル"
	},
	illustrator: "Krgc",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		ja: "左右にあるユニットからだす電磁波で重力をさえぎり空に浮かぶのだ。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ビーム"
		},
		damage: 10,
		cost: ["Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [81]
}

export default card
