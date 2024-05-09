import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "バイバニラ"
	},

	illustrator: "Nelnal",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [584],
	hp: 150,
	types: ["Water"],

	description: {
		ja: "体温は マイナス６度 前後。 ２匹の バニリッチが くっつき 生まれたと いわれている。"
	},

	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ごっかんルーム"
		},

		effect: {
			ja: "このポケモンがいるかぎり、残りHPが「40」以下の相手のポケモンは、ワザが使えない。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water"],

		name: {
			ja: "つららミサイル"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card