import { Card } from "models/database/card"
import Set from "../SVLN"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ミミッキュ"
	},

	illustrator: "Kagemaru Himeno",
	category: "Pokemon",
	dexId: [778],
	hp: 70,
	types: ["Psychic"],

	description: {
		'ja-jp': "陽の 当たらない 暗がりに 棲む。 人前に 出るときは ピカチュウに 似せた 布で 全身を 隠す。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			'ja-jp': "しんぴのまもり"
		},

		effect: {
			'ja-jp': "このポケモンは、相手の「ポケモンex・V」からワザのダメージを受けない。"
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'ja-jp': "ゴーストアイ"
		},

		effect: {
			'ja-jp': "相手のバトルポケモンに、ダメカンを7個のせる。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1,
	rarity: "None"
}

export default card