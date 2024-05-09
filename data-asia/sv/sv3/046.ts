import { Card } from "../../../interfaces"
import Set from "../sv3"

const card: Card = {
	set: Set,

	name: {
		ja: "エーフィ"
	},

	illustrator: "Cona Nitanda",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [196],
	hp: 110,
	types: ["Psychic"],

	description: {
		ja: "相手の 動きを 予知するとき ふたまたに なっている 尻尾の 先は 微妙に 揺れている。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "サイコダメージ"
		},

		damage: "30＋",

		effect: {
			ja: "相手のバトルポケモンにのっているダメカンの数×10ダメージ追加。"
		}
	}, {
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "ねんりき"
		},

		damage: 60,

		effect: {
			ja: "コインを1回投げオモテなら、相手のバトルポケモンをマヒにする。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card