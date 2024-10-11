import { Card } from "../../../interfaces"
import Set from "../SV6a"

const card: Card = {
	set: Set,

	name: {
		ja: "ドクロッグ"
	},

	illustrator: "Anesaki Dynamic",
	rarity: "Common",
	category: "Pokemon",
	dexId: [454],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "のど元に 毒袋を 持つ。 のどを 鳴らすと 溜まった 毒は 練りこまれ 強力になる。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "どつく"
		},

		damage: 50
	}, {
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "クリーンヒット"
		},

		damage: "90＋",

		effect: {
			ja: "相手のバトルポケモンが進化ポケモンなら、90ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 1
}

export default card