import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "コフキムシ"
	},

	illustrator: "Iori Suzuki",
	rarity: "Common",
	category: "Pokemon",
	dexId: [664],
	hp: 40,
	types: ["Grass"],

	description: {
		ja: "毒の粉を まき散らして 敵を 追い払う。 棲んでいる 土地により エサにする 植物が 違う。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "なかまをよぶ"
		},

		effect: {
			ja: "自分の山札からたねポケモンを1枚選び、ベンチに出す。そして山札を切る。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 1
}

export default card