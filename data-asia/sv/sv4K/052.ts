import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "エクスレッグ"
	},

	illustrator: "Souichirou Gunjima",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [920],
	hp: 120,
	types: ["Darkness"],

	description: {
		ja: "本気になると 畳んでいた 脚で 立ち上がり 決戦モードになる。 短時間で 敵を 制圧する。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Darkness"],

		name: {
			ja: "とびはねる"
		},

		damage: 30,

		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		}
	}, {
		cost: ["Darkness", "Darkness"],

		name: {
			ja: "パニッシュキック"
		},

		damage: "10＋",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×40ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card