import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "キラーメ"
	},

	illustrator: "Eri Kamei",
	rarity: "Common",
	category: "Pokemon",
	dexId: [969],
	hp: 70,
	types: ["Fighting"],

	description: {
		ja: "毒成分の 結晶が まるで 花びらに 見える。 花粉のように 毒の粉を ばらまき 身を守る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "いわとばし"
		},

		damage: 10,

		effect: {
			ja: "このワザのダメージは抵抗力を計算しない。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 2
}

export default card