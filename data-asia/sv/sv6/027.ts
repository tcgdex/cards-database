import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "アズマオウ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Gemi",
	dexId: [119],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "秋になると プロポーズのため 体に 脂が のってきて とても きれいな色に 変化する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "つつきおとす"
		},

		damage: 50,

		effect: {
			ja: "ダメージを与える前に、相手のバトルポケモンについている「ポケモンのどうぐ」をトラッシュする。"
		}
	}, {
		cost: ["Colorless", "Colorless", "Colorless"],

		name: {
			ja: "つのドリル"
		},

		damage: 90
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 1
}

export default card
