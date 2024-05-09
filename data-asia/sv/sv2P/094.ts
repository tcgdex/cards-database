import { Card } from "../../../interfaces"
import Set from "../sv2P"

const card: Card = {
	set: Set,

	name: {
		ja: "イキリンコex"
	},

	illustrator: "Amelicart",
	category: "Pokemon",
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
		cost: ["Colorless"],

		name: {
			ja: "きあいをいれる"
		},

		damage: 20,

		effect: {
			ja: "自分のトラッシュから基本エネルギーを2枚まで選び、ベンチポケモン1匹につける。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card