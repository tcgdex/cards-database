import { Card } from "../../../interfaces"
import Set from "../M1S"

const card: Card = {
	set: Set,
	name: {
		ja: "テッカニン"
	},
	illustrator: "Apios",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	description: {
		ja: "どんな攻撃でも避けてしまうと いわれるほど素早い ポケモン。甘い樹液が大好物。"
	},
	stage: "Stage1",
	evolveFrom: {
		ja: "ツチニン"
	},
	abilities: [{
		type: "Ability",
		name: {
			ja: "からぬけ"
		},
		effect: {
			ja: "自分の番に、このカードを手札から出して進化させたとき、1回使える。山札から「ヌケニン」を1枚選び、ベンチに出す。そして山札を切る。"
		}
	}],
	attacks: [{
		name: {
			ja: "とんぼがえり"
		},
		damage: 90,
		effect: {
			ja: "このポケモンをベンチポケモンと入れ替える。"
		},
		cost: ["Grass", "Colorless"]
	}],
	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],
	retreat: 0,
	regulationMark: "I",
	rarity: "Uncommon",
	dexId: [291]
}

export default card
