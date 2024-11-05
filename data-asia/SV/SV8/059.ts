import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "ハバタクカミ"
	},

	illustrator: "Ebila",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [987],
	hp: 90,
	types: ["Psychic"],

	description: {
		ja: "とある 書物に 登場する ハバタクカミという 生物と 似た 特徴を 持つ ポケモン。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			ja: "まどわしうつす"
		},

		effect: {
			ja: "自分のベンチの「古代」のポケモンを1匹選び、選んだポケモンにのっているダメカンをすべて、相手のバトルポケモンにのせ替える。"
		}
	}, {
		cost: ["Psychic", "Psychic"],

		name: {
			ja: "ムーンフォース"
		},

		damage: 70,

		effect: {
			ja: "次の相手の番、このワザを受けたポケモンが使うワザのダメージは「-30」される。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card