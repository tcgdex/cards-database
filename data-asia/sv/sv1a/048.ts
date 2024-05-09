import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "ハリテヤマ"
	},

	illustrator: "Hasuno",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [297],
	hp: 140,
	types: ["Fighting"],

	description: {
		ja: "力くらべが 大好き。 走ってくる 列車を 張り手で 止めてしまう パワーを 持つ。"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			ja: "つっぱりげいこ"
		},

		effect: {
			ja: "このポケモンがいるかぎり、自分のポケモン全員が、相手のポケモンから受けるワザのダメージは「-10」される。"
		}
	}],

	attacks: [{
		cost: ["Fighting", "Colorless", "Colorless"],

		name: {
			ja: "ロケットはりて"
		},

		damage: 120
	}],

	weaknesses: [{
		type: "Psychic",
		value: "×2"
	}],

	retreat: 3
}

export default card