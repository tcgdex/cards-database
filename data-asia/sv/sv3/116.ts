import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ハッサム"
	},

	illustrator: "Oku",
	category: "Pokemon",
	dexId: [212],
	hp: 140,
	types: ["Metal"],

	description: {
		ja: "鋼鉄を 含んでいる ハサミで 捕らえたものは どんなに 硬くても コナゴナに 砕く。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Metal"],

		name: {
			ja: "パニッシュシザー"
		},

		damage: "10＋",

		effect: {
			ja: "相手の場の特性を持つポケモンの数×50ダメージ追加。"
		}
	}, {
		cost: ["Metal", "Metal"],

		name: {
			ja: "いあいぎり"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "－30"
	}],

	retreat: 2
}

export default card