import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ナミイルカ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Narumi Sato",
	dexId: [963],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "水のリングは 頭の 穴から 出る 粘着液と 海の水を 混ぜて 作り出したものなのだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "アクアスラッシュ"
		},

		damage: 30,

		effect: {
			ja: "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card
