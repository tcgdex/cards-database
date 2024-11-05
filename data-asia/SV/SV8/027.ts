import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "タマザラシ"
	},

	illustrator: "Teeziro",
	rarity: "Common",
	category: "Pokemon",
	dexId: [363],
	hp: 70,
	types: ["Water"],

	description: {
		ja: "ぶ厚い 脂肪に 包まれた 見事に まんまるな 体。 歩くより 転がるほうが 速い。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "こなゆき"
		},

		damage: 10,

		effect: {
			ja: "相手のバトルポケモンをねむりにする。"
		}
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 2
}

export default card