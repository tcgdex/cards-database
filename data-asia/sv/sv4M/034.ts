import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "カヌチャン"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [957],
	hp: 60,
	types: ["Psychic"],

	description: {
		ja: "鉄くずを 叩いて ハンマーを 作る。 納得がいく ものが できるまで 何度も 作り直す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "やまあさり"
		},

		effect: {
			ja: "自分の山札を上から1枚見る。そのカードを手札に加える。または、そのカードをトラッシュし、自分の山札を1枚引く。"
		}
	}, {
		cost: ["Psychic"],

		name: {
			ja: "つぶやく"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card