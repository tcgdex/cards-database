import { Card } from "models/database/card"
import Set from "../SV1a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "ウェルカモ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [913],
	hp: 90,
	types: ["Water"],

	description: {
		'ja-jp': "ひたすらに 浅瀬を 走り込んで 足腰を 鍛え 仲間同士で 足技の 華麗さを 競いあう。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			'ja-jp': "みずでっぽう"
		},

		damage: 30
	}, {
		cost: ["Water", "Colorless"],

		name: {
			'ja-jp': "スプラッシュ"
		},

		damage: 50
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 701540,
				tcgplayer: 568205,
			},
		},
	],

	retreat: 1
}

export default card