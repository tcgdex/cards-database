import { Card } from "../../../interfaces"
import Set from "../S5R"

const card: Card = {
	rarity: "Uncommon",
	set: Set,

	name: {
		ja: "みずの塔",
		'zh-tw': "水之塔"
	},

	illustrator: "5ban Graphics",
	category: "Trainer",

	effect: {
		ja: "おたがいの「れんげき」のポケモン全員のにげるためのエネルギーは、それぞれ2個ぶん少なくなる。",
		'zh-tw': "雙方的所有「連擊」寶可夢【撤退】所需的能量各減少2個。"
	},

	trainerType: "Stadium",
	regulationMark: "E",
	variants: [
		{ type: "normal", thirdParty: { cardmarket: 533917, tcgplayer: 569110, cardtrader: 240080 } }
	]
}

export default card