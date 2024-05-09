import { Card } from "../../../interfaces"
import Set from "../sv4M"

const card: Card = {
	set: Set,

	name: {
		ja: "イオルブ"
	},

	illustrator: "Oku",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [826],
	hp: 130,
	types: ["Grass"],

	description: {
		ja: "サイコパワーを 放ち 周囲を 調べている。 観測範囲は 周囲 １０キロにも 達するぞ。"
	},

	stage: "Stage2",

	attacks: [{
		cost: ["Grass"],

		name: {
			ja: "サテライトビーム"
		},

		damage: "30×",

		effect: {
			ja: "相手のトラッシュにあるエネルギーの枚数×30ダメージ。"
		}
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ブレインシェイク"
		},

		damage: 100,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card