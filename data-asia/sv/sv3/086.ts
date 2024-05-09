import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "チルタリス"
	},

	illustrator: "kurumitsu",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [334],
	hp: 120,
	types: ["Dragon"],

	description: {
		ja: "心が 通い合った 人がいると 柔らかく 美しい 羽で そっと 包み込み ハミングする。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "かっくう"
		},

		damage: 30
	}, {
		cost: ["Water", "Metal"],

		name: {
			ja: "じゅくすいソング"
		},

		damage: 110,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。このねむりで投げるコインは2回になり、すべてオモテが出ないと回復しない。"
		}
	}],

	retreat: 1
}

export default card