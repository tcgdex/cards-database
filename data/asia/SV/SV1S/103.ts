import { Card } from "models/database/card"
import Set from "../SV1S"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "コライドンex"
	},

	illustrator: "Ryota Murayama",
	category: "Pokemon",
	hp: 230,
	types: ["Fighting"],
	stage: "Basic",
	suffix: "EX",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "ディノクライ"
		},

		effect: {
			'ja-jp': "自分の番に1回使えて、使ったなら、番は終わる。自分のトラッシュから「基本エネルギー」を2枚まで選び、自分のタイプのたねポケモンに好きなようにつける。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			'ja-jp': "ワイルドインパクト"
		},

		damage: 220,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 693069,
				tcgplayer: 567220,
			},
		},
	],

	retreat: 2
}

export default card