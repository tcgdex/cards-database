import { Card } from "../../../interfaces"
import Set from "../sv6"

const card: Card = {
	set: Set,

	name: {

		ja: "ボクレー"
	},

	category: "Pokemon",
	rarity: "Common",
	illustrator: "Katsunori Sato",
	dexId: [708],
	hp: 70,
	types: ["Grass"],

	description: {
		ja: "死んだ 子供の 魂が 切り株に 宿った ポケモン。 森を さまよい 仲間を 探す。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			ja: "やどりぎのタネ"
		},

		damage: 20,

		effect: {
			ja: "このポケモンのHPを「20」回復する。"
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	retreat: 2
}

export default card
