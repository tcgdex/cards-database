import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "ユキハミ"
	},

	illustrator: "N-DESIGN Inc.",
	category: "Pokemon",
	dexId: [872],
	hp: 50,
	types: ["Water"],

	description: {
		ja: "エサは 地面に 積もった 雪。 柔らかな 新雪を 好み 山頂 目指して 食べ進む。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "こなゆき"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card