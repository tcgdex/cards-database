import { Card } from "../../../interfaces"
import Set from "../sv5a"

const card: Card = {
	set: Set,

	name: {
		ja: "グレイシア"
	},

	illustrator: "rika",
	rarity: "Uncommon",
	category: "Pokemon",
	dexId: [471],
	hp: 120,
	types: ["Water"],

	description: {
		ja: "体温を 下げることで 全身の 体毛を 凍らせて 鋭く 尖った 針のようにして 飛ばす。"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Water"],

		name: {
			ja: "しみいるれいき"
		},

		damage: 30,

		effect: {
			ja: "次の相手の番の終わりに、このワザを受けたポケモンにダメカンを9個のせる。"
		}
	}, {
		cost: ["Water", "Colorless"],

		name: {
			ja: "つららミサイル"
		},

		damage: 70
	}],

	weaknesses: [{
		type: "Metal",
		value: "×2"
	}],

	retreat: 1
}

export default card