import { Card } from "../../../interfaces"
import Set from "../sv1V"

const card: Card = {
	set: Set,

	name: {
		ja: "ヤドラン"
	},

	illustrator: "Shinji Kanda",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [80],
	hp: 100,
	types: ["Water"],

	description: {
		ja: "激しい 戦いで 尻尾に 噛みついた シェルダーが 外れると もとの ヤドンに 戻ってしまう。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "へんなこうどう"
		},

		effect: {
			ja: "自分の番に何回でも使える。自分の場のポケモンにのっているダメカンを1個選び、このポケモンにのせ替える。"
		}
	}],

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			ja: "バブルドレイン"
		},

		damage: 60,

		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 3
}

export default card