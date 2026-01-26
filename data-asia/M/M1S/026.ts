import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "コオリッポ"
	},
	illustrator: "Akira Komayama",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	description: {
		ja: "気温の高い日は仲間同士で頭の氷をくっつけておたがいを冷やしながら過ごす。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "いてつくずつき"
		},
		damage: 20,
		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "たいあたり"
		},
		damage: 90,
		cost: ["Water", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [875]
}

export default card
