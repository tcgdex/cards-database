import { Card } from "../../../interfaces"
import Set from "../S9a"

const card: Card = {
	set: Set,

	name: {
		ja: "バサギリ"
	},

	illustrator: "Souichirou Gunjima",
	category: "Pokemon",
	dexId: [900],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "硬き岩で 身を守り 無骨な 斧は 大木を 切り倒す。 気性 荒々しく 荒地にて 遭遇しときは 逃げの一手。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "たいぼくぎり"
		},

		effect: {
			ja: "コインを2回投げ、すべてオモテなら、相手のバトルポケモンをきぜつさせる。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "あばれタックル"
		},

		damage: 120,

		effect: {
			ja: "このポケモンにも30ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card