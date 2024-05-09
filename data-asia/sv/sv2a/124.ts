import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ルージュラex"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 200,
	types: ["Water"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Water", "Colorless", "Colorless"],

		name: {
			ja: "ズッキュンキッス"
		},

		effect: {
			ja: "相手のバトルポケモンがねむりなら、そのポケモンをきぜつさせる。"
		}
	}, {
		cost: ["Water", "Water", "Water"],

		name: {
			ja: "こごえるかぜ"
		},

		damage: 120,

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