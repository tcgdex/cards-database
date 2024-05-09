import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリスex"
	},

	illustrator: "Saki Hayashiro",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 260,
	types: ["Dragon"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ハミングヒール"
		},

		effect: {
			ja: "自分の番に1回使える。自分のポケモン全員のHPを、それぞれ「20」回復する。"
		}
	}],

	attacks: [{
		cost: ["Water", "Metal"],

		name: {
			ja: "ひかりのはどう"
		},

		damage: 140,

		effect: {
			ja: "次の相手の番、このポケモンは相手のポケモンが使うワザの効果を受けない。"
		}
	}],

	retreat: 1
}

export default card