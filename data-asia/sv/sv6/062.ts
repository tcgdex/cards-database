import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "キラーメ"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Miki Tanaka",
	dexId: [969],
	hp: 60,
	types: ["Fighting"],

	description: {
		ja: "毒成分の 結晶が まるで 花びらに 見える。 花粉のように 毒の粉を ばらまき 身を守る。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Fighting"],

		name: {
			ja: "ロックショット"
		},

		damage: 30,

		effect: {
			ja: "このポケモンについているエネルギーを1個選び、トラッシュする。"
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "×2"
	}],

	retreat: 1
}

export default card
