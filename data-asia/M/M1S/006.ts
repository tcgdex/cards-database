import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "ツボツボ"
	},
	illustrator: "Shinya Komatsu",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		ja: "ツボのような甲羅の中にためこんだ木の実はいつの間にかドロドロのジュースに変わる。"
	},
	stage: "Basic",
	abilities: [{
		type: "Ability",
		name: {
			ja: "はっこうジュース"
		},
		effect: {
			ja: "このポケモンに草エネルギーがついているなら、自分の番に1回使える。自分のポケモン1匹のHPを「30」回復する。"
		}
	}],
	attacks: [{
		name: {
			ja: "ころがる"
		},
		damage: 30,
		cost: ["Grass", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 1,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [213]
}

export default card
