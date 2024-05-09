import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ヒトモシ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Saya Tsuruta",
	dexId: [607],
	hp: 60,
	types: ["Fire"],

	description: {
		ja: "明かりを 灯して 道案内を するように 見せかけながら 生命力を 吸い取っている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "なかまをよぶ"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
		}
	}, {
		cost: ["Fire", "Colorless"],

		name: {
			ja: "ひだね"
		},

		damage: 20
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card
