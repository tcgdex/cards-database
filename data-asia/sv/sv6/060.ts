import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ドテッコツ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Aya Kusube",
	dexId: [533],
	hp: 100,
	types: ["Fighting"],

	description: {
		ja: "鍛え上げられた 筋肉の 体は プロレスラーが 束になって 攻撃しても びくともしない。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "げんこつ"
		},

		damage: 20
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ばかぢから"
		},

		damage: "50＋",

		effect: {
			ja: "のぞむなら、30ダメージ追加。その場合、このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card
