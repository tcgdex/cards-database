import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "モンジャラ"
	},
	illustrator: "Yuriko Akase",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		ja: "ちぎれても 無限に 伸びる ツルの 奥の 正体は いまだ 解明されていない。"
	},
	stage: "Basic",
	attacks: [{
		name: {
			ja: "どくのこな"
		},
		effect: {
			ja: "相手のバトルポケモンをどくにする。"
		},
		cost: ["Grass"]
	}, {
		name: {
			ja: "ひっかける"
		},
		damage: 30,
		cost: ["Grass", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 2,
	regulationMark: "I",
	rarity: "Common",
	dexId: [114]
}

export default card
