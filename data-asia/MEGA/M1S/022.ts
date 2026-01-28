import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ジメレオン"
	},
	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	description: {
		ja: "粘液まみれの長い舌を目にも留まらない速さで伸ばし獲物を見事に仕留めてみせる。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "メッソン"
	},
	attacks: [{
		name: {
			ja: "にどづき"
		},
		damage: "30×",
		effect: {
			ja: "コインを2回投げ、オモテの数×30ダメージ。"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [817]
}

export default card
