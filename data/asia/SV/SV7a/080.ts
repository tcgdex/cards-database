import { Card } from "models/database/card"
import Set from "../SV7a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ブリジュラスex"
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
			'ja-jp': "ごうきんビルド"
		},

		effect: {
			'ja-jp': "自分の番に、このカードを手札から出して進化させたとき、1回使える。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のポケモンに好きなようにつける。"
		}
	}],

	attacks: [{
		cost: ["Metal", "Metal", "Metal"],

		name: {
			'ja-jp': "メタルディフェンダー"
		},

		damage: 220,

		effect: {
			'ja-jp': "次の相手の番、このポケモンの弱点は、すべてなくなる。"
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

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 788053,
				tcgplayer: 579462,
			},
		},
	],

	retreat: 2,
	rarity: "None"
}

export default card