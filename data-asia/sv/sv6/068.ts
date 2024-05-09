import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "フシデ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Tomokazu Komiya",
	dexId: [543],
	hp: 80,
	types: ["Darkness"],

	description: {
		ja: "ヤクデは 種類の 近い 仲間だが おたがいが 出会うと 大げんかに なるぞ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "どくえき"
		},

		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		}
	}, {
		cost: ["Darkness", "Colorless", "Colorless"],

		name: {
			ja: "かいてんアタック"
		},

		damage: 40
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3
}

export default card
