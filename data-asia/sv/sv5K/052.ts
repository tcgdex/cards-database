import { Card } from "../../../interfaces"
import Set from "../sv5K"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドン"
	},

	illustrator: "Teeziro",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [1007],
	hp: 140,
	types: ["Dragon"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			ja: "げんせいらんだ"
		},

		damage: "30×",

		effect: {
			ja: "自分の場の「古代」のポケモンの数×30ダメージ。"
		}
	}, {
		cost: ["Fire", "Fighting", "Colorless"],

		name: {
			ja: "ひきさく"
		},

		damage: 130,

		effect: {
			ja: "このワザのダメージは、相手のバトルポケモンにかかっている効果を計算しない。"
		}
	}],

	retreat: 2
}

export default card