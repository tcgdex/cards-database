import { Card } from "../../../interfaces"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		ja: "ブリジュラスex"
	},

	illustrator: "5ban Graphics",
	category: "Pokemon",
	hp: 300,
	types: ["Metal"],
	stage: "Stage1",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ごうきんビルド"
		},

		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			ja: "メタルディフェンダー"
		},

		damage: 220,

		effect: {
			ja: "次の相手の番、このポケモンの弱点は、すべてなくなる。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2,
	rarity: "None"
}

export default card