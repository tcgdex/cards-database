import { Card } from "../../../interfaces"
import Set from "../sv4K"

const card: Card = {
	set: Set,

	name: {
		ja: "ココロモリ"
	},

	illustrator: "Narumi Sato",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [528],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "鼻の 形が おめでたいと 幸福を 呼ぶ シンボルとして 祭る 地域も あるという。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Psychic"],

		name: {
			ja: "メロメロウェーブ"
		},

		damage: 30,

		effect: {
			ja: "相手のバトルポケモンをこんらんにする。このこんらんでのせるダメカンの数は6個になる。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card