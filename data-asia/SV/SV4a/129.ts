import { Card } from "../../../interfaces"
import Set from "../SV4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハッサム"
	},

	illustrator: "otumami",
	rarity: "None",
	category: "Pokemon",
	dexId: [212],
	hp: 140,
	types: ["Metal"],

	evolveFrom: {
		ja: "ストライク"
	},

	description: {
		ja: "鋼鉄を 含んでいる ハサミで 捕らえたものは どんなに 硬くても コナゴナに 砕く。"
	},

	stage: "Stage1",

	attacks: [{
		name: {
			ja: "パニッシュシザー"
		},

		effect: {
			ja: "相手の場の特性を持つポケモンの数×50ダメージ追加。"
		},

		damage: "10+",
		cost: ["Metal"]
	}, {
		name: {
			ja: "いあいぎり"
		},

		damage: 70,
		cost: ["Metal", "Metal"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "G",
	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 746511,
				tcgplayer: 567530,
				cardtrader: 269704,
			},
		},
	]
}

export default card
