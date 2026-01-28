import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "マンタイン"
	},
	illustrator: "Shimaris Yukichi",
	category: "Pokemon",
	hp: 110,
	types: ["Water"],
	description: {
		ja: "悠然と 海を 泳ぐ。 食べ残しを 狙った テッポウオが くっついていても 気にしていない。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "なかまをよぶ"
		},
		effect: {
			ja: "自分の山札からたねポケモンを2枚まで選び、ベンチに出す。そして山札を切る。"
		},
		cost: ["Colorless"]
	}, {
		name: {
			ja: "たきのぼり"
		},
		damage: 50,
		cost: ["Water", "Colorless"]
	}],
	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Common",
	dexId: [226]
}

export default card
