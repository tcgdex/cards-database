import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "カブト"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [140],
	hp: 90,
	types: ["Fighting"],

	description: {
		ja: "絶滅したとも 言われるが 一部の 地域では けっこう 普通に 見かける らしい。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "ダブルひっかき"
		},

		damage: "70×",

		effect: {
			ja: "コインを2回投げ、オモテの数×70ダメージ。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card