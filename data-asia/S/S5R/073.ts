import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	set: Set,

	name: {
		ja: "エンペルトV"
	},

	illustrator: "Ayaka Yoshida",
	rarity: "Ultra Rare",
	category: "Pokemon",
	dexId: [395],
	hp: 210,
	types: ["Water"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			ja: "エンペラーアイ"
		},

		effect: {
			ja: "このポケモンがバトル場にいるかぎり、相手の場のたねポケモン（「ルールを持つポケモン」をのぞく）の特性は、すべてなくなる。"
		}
	}],

	attacks: [{
		name: {
			ja: "らせんぎり"
		},

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、ベンチポケモンにつけ替える。"
		},

		damage: 130,
		cost: ["Water", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "E",
	variants: [
		{ type: "holo", thirdParty: { cardmarket: 538673, tcgplayer: 569114, cardtrader: 240084 } }
	]
}

export default card
