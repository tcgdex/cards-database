import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ビリジオンV"
	},

	illustrator: "Saki Hayashiro",
	category: "Pokemon",
	hp: 200,
	types: ["Grass"],
	stage: "Basic",
	suffix: "V",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "わかくさのかぜ"
		},

		effect: {
			'ja-jp': "このポケモンがいるかぎり、エネルギーがついている自分のポケモン全員は、特殊状態にならず、受けている特殊状態は、すべて回復する。"
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			'ja-jp': "エメラルドブレード"
		},

		damage: 200,

		effect: {
			'ja-jp': "次の自分の番、このポケモンはワザが使えない。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609842,
				tcgplayer: 570644,
			},
		},
	],

	retreat: 1
}

export default card