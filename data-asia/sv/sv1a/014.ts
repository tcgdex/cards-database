import { Card } from "../../../interfaces"
import Set from "../sv1a"

const card: Card = {
	set: Set,

	name: {
		ja: "シシコ"
	},

	illustrator: "Yuu Nishida",
	rarity: "Common",
	category: "Pokemon",
	dexId: [667],
	hp: 70,
	types: ["Fire"],

	description: {
		ja: "幼いうちに メスの カエンジシに 狩りを 教わるが 成長すると 群れを 離れて 独り立ちする。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			ja: "まるやけ"
		},

		effect: {
			ja: "場に出ているスタジアムをトラッシュする。"
		}
	}, {
		cost: ["Fire"],

		name: {
			ja: "ひだね"
		},

		damage: 10
	}],

	weaknesses: [{
		type: "Water",
		value: "×2"
	}],

	retreat: 1
}

export default card