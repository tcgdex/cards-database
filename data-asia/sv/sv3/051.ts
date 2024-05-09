import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ビークインex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 270,
	types: ["Psychic"],
	stage: "Stage1",
	suffix: "EX",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "かいふくフェロモン"
		},

		effect: {
			ja: "自分のポケモン1匹のHPを「60」回復する。"
		}
	}, {
		cost: ["Grass", "Grass", "Grass"],

		name: {
			ja: "ファントムクイーン"
		},

		damage: 200,

		effect: {
			ja: "ダメカンがのっている相手のベンチポケモン全員に、それぞれダメカンを3個のせる。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 2
}

export default card