import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "マルヤクデ"
	},

	illustrator: "Krgc",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [851],
	hp: 140,
	types: ["Fire"],

	description: {
		ja: "発熱時の 体温は およそ ８００度。 体を 鞭のように しならせて 跳びかかってくるぞ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fire"],

		name: {
			ja: "こがす"
		},

		effect: {
			ja: "相手のバトルポケモンをやけどにする。"
		}
	}, {
		cost: ["Fire", "Fire"],

		name: {
			ja: "くろこげブレス"
		},

		damage: 180,

		effect: {
			ja: "相手のバトルポケモンがやけどでないなら、このワザは失敗。"
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 3
}

export default card