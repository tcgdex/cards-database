import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "パオジアン"
	},

	illustrator: "Yuya Oka",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1002],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "大昔に 剣によって 露と消えた 者たちの 憎しみが 雪を まとい ポケモンになった。"
	},

	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			ja: "ゆきにしずめる"
		},

		effect: {
			ja: "自分の番に、このカードを手札からベンチに出したとき、1回使える。場に出ているスタジアムをトラッシュする。"
		}
	}],

	attacks: [{
		cost: ["Water", "Water", "Colorless"],

		name: {
			ja: "アイシクルループ"
		},

		damage: 120,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、手札にもどす。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card