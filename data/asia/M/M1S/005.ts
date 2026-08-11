import { Card } from "models/database/card"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		'ja-jp': "メガニウム"
	},
	illustrator: "Yoriyuki Ikegami",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	description: {
		'ja-jp': "メガニウムのそばにいると森林浴をしたようなすがすがしい気分になれる。"
	},
	stage: "Stage2",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 840545,
				tcgplayer: 647244,
			},
		},
	],

	evolveFrom: {
		'ja-jp': "ベイリーフ"
	},
	abilities: [{
		type: "Ability",
		name: {
			'ja-jp': "おいしげる"
		},
		effect: {
			'ja-jp': "このポケモンがいるかぎり、自分のポケモン全員についている「基本草エネルギー」は、それぞれ草エネルギー2個ぶんとしてはたらく。この特製の効果は重ならない。"
		}
	}],
	attacks: [{
		name: {
			'ja-jp': "ソーラービーム"
		},
		damage: 140,
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Rare",
	dexId: [154]
}

export default card
