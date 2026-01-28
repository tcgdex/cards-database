import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ラクライ"
	},
	illustrator: "Naoki Saito",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	description: {
		ja: "静電気を体毛に溜める。空気の乾燥した季節には全身から火花を散らす。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "でんげき"
		},
		damage: 30,
		effect: {
			ja: "このポケモンにも10ダメージ。"
		},
		cost: ["Lightning"]
	}],
	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [309]
}

export default card
