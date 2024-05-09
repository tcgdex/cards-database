import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ルージュラ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Gapao",
	dexId: [124],
	hp: 90,
	types: ["Water"],

	description: {
		ja: "ガラルの とある 地域では 氷の 女王と 呼んで ルージュラを 恐れ崇めていた。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "おさそいキッス"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。その後、このポケモンについているエネルギーを1個選び、新しく出したポケモンにつけ替える。"
		}
	}, {
		cost: ["Water"],

		name: {
			ja: "スノーアイス"
		},

		damage: 30
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card
