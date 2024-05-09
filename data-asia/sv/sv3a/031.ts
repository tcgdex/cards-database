import { Card } from "../../../interfaces"
import Set from "../sv3a"

const card: Card = {
	set: Set,

	name: {
		ja: "ガケガニ"
	},

	illustrator: "Yuya Oka",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [950],
	hp: 120,
	types: ["Fighting"],

	description: {
		ja: "逆さまになって 崖の 上から 獲物を 狙うが 頭に 血が上るので 長くは 待てない。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "ヒステリックシザー"
		},

		damage: "30＋",

		effect: {
			ja: "このポケモンが特殊状態なら、160ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Fighting"],

		name: {
			ja: "ボイルドプレス"
		},

		damage: 80,

		effect: {
			ja: "このポケモンをやけどにする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 3
}

export default card