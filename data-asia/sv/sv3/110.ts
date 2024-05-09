import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "キュウコン"
	},

	illustrator: "SIE NANAHARA",
	category: "Pokemon",
	dexId: [38],
	hp: 120,
	types: ["Fire"],

	description: {
		ja: "頭が良くて 執念深い。 ふざけて しっぽを つかむと １０００年 たたられるという。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "おにび"
		},

		damage: 20
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "きゅうびのまい"
		},

		effect: {
			ja: "相手のポケモン1匹に、ダメカンを9個のせる。次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card