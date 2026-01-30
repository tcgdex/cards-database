import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ユキハミ"
	},
	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],
	description: {
		ja: "エサは地面に積もった雪。柔らかな新雪を好み山頂目指して食べ進む。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "かくれる"
		},
		effect: {
			ja: "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		},
		cost: ["Water"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [872]
}

export default card
