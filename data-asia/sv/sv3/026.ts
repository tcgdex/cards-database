import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "クマシュン"
	},

	illustrator: "Mizue",
	rarity: "Common",
	category: "Pokemon",
	dexId: [613],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "寒い 地域の 海辺に 多い。 鼻水が 垂れていない ときは 病気の 可能性が ある。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "けとばす"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "ころばす"
		},

		damage: "20＋",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card