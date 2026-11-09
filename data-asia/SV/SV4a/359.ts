import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ディンルーex"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	dexId: [1003],
	hp: 240,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "じゅばくのだいち"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手の場のダメカンがのっているポケモン（ポケモンexをのぞく）の特性は、すべてなくなる。"
		}
	}],

	attacks: [{
		name: {
			ja: "ランドスクープ"
		},

		effect: {
			ja: "相手のベンチポケモン1匹に、ダメカンを2個のせる。"
		},

		damage: 150,
		cost: ["Fighting", "Fighting", "Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 4,

	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 747713,
				tcgplayer: 567756,
				cardtrader: 270329,
			},
		},
	]
}

export default card