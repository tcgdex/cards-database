import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ツチニン"
	},
	illustrator: "Kuroimori",
	category: "Pokemon",
	hp: 50,
	types: ["Grass"],
	description: {
		ja: "１０年以上土の中で暮らすこともある。樹木の根っこから栄養を吸い取る。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "ひっかく"
		},
		damage: 20,
		cost: ["Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [290]
}

export default card
