import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ドラパルトex"
	},

	category: "Pokemon",
	rarity: "Double rare",
	illustrator: "5ban Graphics",
	hp: 320,
	types: ["Dragon"],
	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "ジェットヘッド"
		},

		damage: 70
	}, {
		cost: ["Fire", "Psychic"],

		name: {
			ja: "ファントムダイブ"
		},

		damage: 200,

		effect: {
			ja: "ダメカン6個を、相手のベンチポケモンに好きなようにのせる。"
		}
	}],

	retreat: 1
}

export default card
