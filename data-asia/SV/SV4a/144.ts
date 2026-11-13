import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "メタモン"
	},

	illustrator: "KIYOTAKA OSHIYAMA",
	rarity: "None",
	category: "Pokemon",
	dexId: [132],
	hp: 60,
	types: ["Colorless"],

	description: {
		ja: "変身は 完璧なのだが 笑わされて 力が 抜けると 変身は 解けてしまう。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へんしんスタート"
		},

		effect: {
			ja: "このポケモンがバトル場にいるなら、最初の自分の番にだけ1回使える。自分の山札からたねポケモン（「メタモン」をのぞく）を1枚選ぶ。その後、このポケモンと、ついているすべてのカードをトラッシュし、このポケモンがいた場所に、選んだポケモンを出す。そして山札を切る。"
		}
	}],

	attacks: [{
		name: {
			ja: "ぺとっ"
		},

		damage: 10,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746526,
				tcgplayer: 567545,
				cardtrader: 269780,
			},
		},
	]
}

export default card
