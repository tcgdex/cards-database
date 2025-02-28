import { Card } from "../../../interfaces"
import Set from "../SV9"

const card: Card = {
	set: Set,

	name: {
		ja: "ホエルオー"
	},

	illustrator: "Katsunori Sato",
	rarity: "None",
	category: "Pokemon",
	dexId: [321],
	hp: 240,
	types: ["Water"],

	description: {
		ja: "とにかく どでかいので 人気。 ホエルオーウォッチングは 各地で 人気の 観光プラン なのだ。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			ja: "ハイドロポンプ"
		},

		damage: "10＋",

		effect: {
			ja: "このポケモンについているエネルギーの数×50ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	retreat: 4
}

export default card