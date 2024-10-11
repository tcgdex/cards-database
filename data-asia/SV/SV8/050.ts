import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "アグノム"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Common",
	category: "Pokemon",
	dexId: [482],
	hp: 70,
	types: ["Psychic"],

	description: {
		ja: "意思の神と 呼ばれている。 湖の 底で 眠り続け 世界の バランスを とっている。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			ja: "マインドキネシス"
		},

		damage: "10＋",

		effect: {
			ja: "相手のポケモン全員にのっているダメカンの数×10ダメージ追加。"
		}
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "－30"
	}],

	retreat: 1
}

export default card