import { Card } from "models/database/card"
import Set from "../SV2P"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウソッキー"
	},

	illustrator: "Narumi Sato",
	category: "Pokemon",
	dexId: [185],
	hp: 110,
	types: ["Fighting"],

	description: {
		'ja-jp': "いつも 木のふりを している。 体の つくりは 植物より 石や 岩などに 近いようだ。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			'ja-jp': "なぐってかくれる"
		},

		damage: 20,

		effect: {
			'ja-jp': "コインを1回投げオモテなら、次の相手の番、このポケモンはワザのダメージや効果を受けない。"
		}
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			'ja-jp': "ひじうち"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 707647,
				tcgplayer: 567837,
			},
		},
	],

	retreat: 1,
}

export default card