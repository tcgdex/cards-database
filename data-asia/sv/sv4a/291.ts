import { Card } from "../../../interfaces"
import Set from "../sv4a"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤミラミ"
	},

	illustrator: "nagimiso",
	category: "Pokemon",
	dexId: [302],
	hp: 70,
	types: ["Darkness"],

	description: {
		ja: "暗い 洞窟に 棲み処を 作り 鋭い ツメを 使って 宝石を 掘り出しては 食べる。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "やみのひとみ"
		},

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}, {
		cost: ["Darkness"],

		name: {
			ja: "アサシンクロー"
		},

		damage: "20＋",

		effect: {
			ja: "相手のバトルポケモンが特殊状態なら、70ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card