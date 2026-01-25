import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "モジャンボ"
	},
	illustrator: "REND",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	description: {
		ja: "暖かい土地で暮らすものほど、ツルの伸びが早い。伸びると自ら切って短くする。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "モンジャラ"
	},
	attacks: [{
		name: {
			ja: "すいとる"
		},
		damage: 30,
		effect: {
			ja: "このポケモンのHPを「30」回復する。"
		},
		cost: ["Grass", "Colorless"]
	}, {
		name: {
			ja: "ムキムキウィップ"
		},
		damage: "120+",
		effect: {
			ja: "このワザを使うためのエネルギーより、2個多くのエネルギーがついているなら、140ダメージ追加。"
		},
		cost: ["Grass", "Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 4,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [465]
}

export default card
