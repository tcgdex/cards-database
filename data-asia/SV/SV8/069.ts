import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コライドン"
	},

	illustrator: "Ryuta Fuse",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [1007],
	hp: 130,
	types: ["Fighting"],

	description: {
		ja: "拳で 大地を 引き裂いたと 古い 探検記に 記された ツバサノオウの 正体らしい。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "はじょうもうこう"
		},

		damage: "30＋",

		effect: {
			ja: "前の自分の番、このポケモン以外の「古代」のポケモンがワザを使っていたなら、150ダメージ追加。"
		}
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			ja: "ぶちかます"
		},

		damage: 110
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 2
}

export default card