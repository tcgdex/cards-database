import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "ダークライ"
	},

	illustrator: "Bun Toujo",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [491],
	hp: 130,
	types: ["Darkness"],

	description: {
		ja: "人々を 深い 眠りに 誘い 夢を 見せる 能力を 持つ。 新月の 夜に 活動する。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "くろいまどろみ"
		},

		damage: 20,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			ja: "ナイトサイクロン"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーをすべて、ベンチポケモンに好きなようにつけ替える。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card