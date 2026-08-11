import { Card } from "models/database/card"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		'ja-jp': "バサギリ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [900],
	hp: 140,
	types: ["Fighting"],

	description: {
		'ja-jp': "硬き岩で 身を守り 無骨な 斧は 大木を 切り倒す。 気性 荒々しく 荒地にて 遭遇しときは 逃げの一手。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'ja-jp': "たいぼくぎり"
		},

		effect: {
			'ja-jp': "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			'ja-jp': "あばれタックル"
		},

		damage: 120,

		effect: {
			'ja-jp': "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 609839,
				tcgplayer: 570641,
			},
		},
	],

	retreat: 2
}

export default card