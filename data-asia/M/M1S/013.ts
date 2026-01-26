import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "マルヤクデ"
	},
	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 140,
	types: ["Fire"],
	description: {
		ja: "攻撃的な性質。焼けた体も危険だが大きなキバも鋭いぞ。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ヤクデ"
	},
	attacks: [{
		name: {
			ja: "まきつきクラッシュ"
		},
		damage: 50,
		effect: {
			ja: "コインを2回投げ、オモテの数ぶん、相手のバトルポケモンについているエネルギーを選び、トラッシュする。"
		},
		cost: ["Colorless", "Colorless"]
	}, {
		name: {
			ja: "ヒートクローラー"
		},
		damage: 140,
		cost: ["Fire", "Fire", "Colorless", "Colorless"]
	}],
	weaknesses: [{
		type: "Water",
		value: "×2"
	}],
	retreat: 3,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [851]
}

export default card
