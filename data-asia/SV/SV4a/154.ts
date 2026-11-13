import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "イキリンコex"
	},

	illustrator: "PLANETA Mochizuki",
	rarity: "Double rare",
	category: "Pokemon",
	dexId: [931],
	hp: 160,
	types: ["Colorless"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "イキリテイク"
		},

		effect: {
			ja: "最初の自分の番にだけ1回使える。自分の手札をすべてトラッシュし、山札を6枚引く。この番、すでに別の「イキリテイク」を使っていたなら、この特性は使えない。"
		}
	}],

	attacks: [{
		name: {
			ja: "きあいをいれる"
		},

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
		},

		damage: 20,
		cost: ["Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746536,
				tcgplayer: 567555,
				cardtrader: 269783,
			},
		},
	]
}

export default card
