import { Card } from "../../../interfaces"
import Set from "../sv2a"

const card: Card = {
	set: Set,

	name: {
		ja: "ナッシー"
	},

	illustrator: "Shigenori Negishi",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [103],
	hp: 140,
	types: ["Grass"],

	description: {
		ja: "３つの 頭が 一丸となって 撃つ サイコパワーは 強力。 空が 曇ると 動きが 鈍る。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "サイコキネシス"
		},

		damage: "30＋",

		effect: {
			ja: "相手のバトルポケモンについているエネルギーの数×30ダメージ追加。"
		}
	}, {
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			ja: "ぶちかます"
		},

		damage: 130
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 3
}

export default card